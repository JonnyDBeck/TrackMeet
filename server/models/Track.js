const { Schema, model } = require('mongoose')
const Exercise = require('./Exercise').schema;
const Profile = require('./Profile').schema;

const trackSchema = new Schema (
    {
        exercise: {
            type: Exercise,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        //Note that amount references different things for different execises
        //For example: Pushups require the amount while jogging requires the miles
        amount: {
            type: Number,
            required: true
        }
    }
)

const Track = model("Track", trackSchema)

module.exports = Track;