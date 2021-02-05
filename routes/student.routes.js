const studentController = require('../controllers/student.controller')
const express = require('express')
const app = express.Router()

app.get('/', studentController.index)
app.post('/', studentController.store)

module.exports = app