const db = require('../config/connection')
const { Profile, Track, Exercise} = require('../models')

const exerciseData = require('./exerciseData.json')

db.once("open", async ()=>{
    await Exercise.deleteMany({});

    await Exercise.insertMany(exerciseData);

    console.log("Data Seeded")
})