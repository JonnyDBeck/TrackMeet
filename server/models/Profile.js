const { Schema, model } = require('mongoose')
const Track = require('./Track').schema;

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
        },
        friends: {
            type: [Profile],
            required: false
        }
    }
)

const Proflie = model("Profile", profileSchema)

module.exports = Proflie