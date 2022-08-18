const express = require('express')
const route = express.Router()
const admissionController = require('../../controller/admissionController')
route.get('/getAll' , admissionController.getAll)
route.post('/create', admissionController.create)
route.get('/getJoinData', admissionController.getJoinData)
module.exports=route