const express = require('express')
const route = express.Router();
const sessonController = require('../../controller/setup/sessionController')
route.get('/getAll', sessonController.getAll)
route.post('/create', sessonController.create)
module.exports = route