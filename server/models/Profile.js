const { Schema, model } = require('mongoose')
const Track = require('./Track').schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const profileSchema = new Schema (
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        tracks: {
            type: [Track],
            required: false
        }
    }
);


// static login method
profileSchema.statics.login = async function (email, password) {
    // validation
    if (!email || !password) {
      throw Error("All fields must be filled");
    }
  
    const user = await this.findOne({ email });
  
    if (!user) {
      throw Error("Incorrect email");
    }
  
    const match = await bcrypt.compare(password, user.password);
  
    if (!match) {
      throw Error("Incorrect password");
    }
  
    return user;
  };
  
  // static signup method
  profileSchema.statics.signup = async function (email, password) {
    // validation
    if (!email || !password) {
      throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("Email not valid");
    }
    // if (!validator.isStrongPassword(password)) {
    //   throw Error("Password not strong enough");
    // }
  
    const exists = await this.findOne({ email });
  
    if (exists) {
      throw Error("Email already in use");
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    const user = await this.create({ email, password: hash });
  
    return user;
  };
  

  

const Proflie = model("Profile", profileSchema)

module.exports = Proflie