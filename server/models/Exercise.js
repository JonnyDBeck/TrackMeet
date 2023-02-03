const { Schema, model } = require('mongoose')

const exerciseSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        calper: {
            type: Number,
            required: true
        },
        measure: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            required: false
        }
    }
)

const Exercise = model("Exercise", exerciseSchema)

module.exports = Exercise