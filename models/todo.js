const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    todo : {
        type: String,
        required: true
    },
    completed : {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt : {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Todo', TodoSchema)