const express = require('express')
const router = express.Router()
const asyncHandler = require('../middlewares/async')

const Todo = require('../models/todo')

// gets all todos
router.get('/', asyncHandler(async (req, res, next) => {
    const todos = await Todo.find()
    res.status(200).json({ succes: true, data: todos })
}))

// single todo
router.get('/:id', asyncHandler(async (req, res, next) => {
    const todo = await Todo.findById(req.params.id)
    res.status(200).json({ succes: true, data: todo })
}))

// creates a todo
router.post('/', asyncHandler(async (req, res, next) => {
    const todo = await Todo.create(req.body)
    res.status(200).json({ succes: true, data: todo })
}))

// update todo
router.put('/:id', asyncHandler(async (req, res, next) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({ succes: true, data: todo })
}))

// delete todo
router.delete('/:id', asyncHandler(async (req, res, next) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({ succes: true, data: {} })
}))

module.exports = router