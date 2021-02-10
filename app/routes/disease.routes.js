const diseaseController = require('../../app/controllers/disease.controller')
const express = require('express')
const app = express.Router()

app.get('/', diseaseController.index)
app.post('/', diseaseController.store)
app.get('/:id', diseaseController.show)
app.put('/:id', diseaseController.update)
app.delete('/:id', diseaseController.destroy)

module.exports = app