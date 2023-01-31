const { Schema, model } = require('mongoose')
const Exercise = require('./Exercise').schema;

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
        amount: {
            type: Number,
            required: true
        }
    }
)

const Track = model("Track", trackSchema)

module.exports = Track