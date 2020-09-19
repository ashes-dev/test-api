require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const errorHandler = require('./middlewares/error')
const todo = require('./router/todo')

const connectDb = require('./db')
connectDb()

app.use(express.json())

app.get('/', (req, res) => {
    const message = { message : "Welcome to todos" }
    res.status(200).json(message)
})

app.use('/todos', todo)

app.use(errorHandler)

const server = app.listen(PORT, console.log(`server live`))
  
// Handle unhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(`Error: ${err.message}`)
})