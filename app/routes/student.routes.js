const studentController = require('../../app/controllers/student.controller')
const express = require('express')
const app = express.Router()

app.get('/', studentController.index)
app.post('/', studentController.store)
app.get('/:id', studentController.show)
app.put('/:id', studentController.update)
app.delete('/:id', studentController.destroy)

module.exports = app