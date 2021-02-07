const classController = require('../../app/controllers/class.controller')
const express = require('express')
const app = express.Router()

app.get('/', classController.index)
app.post('/', classController.store)

module.exports = app