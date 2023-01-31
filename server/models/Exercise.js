const { Schema, model } = require('mongoose')

const exerciseSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        calpermin: {
            type: Number,
            required: true
        },
        Tags: {
            type: [String],
            required: false
        }
    }
)

const Exercise = model("Exercise", exerciseSchema)

module.exports = Exercise