const express = require('express')
const route = express.Router()
const admissionController = require('../../controller/admissionController')
route.get('/getAll' , admissionController.getAll)
route.post('/create', admissionController.create)
route.get('/getJoinByStringget', admissionController.getJoinByString)

route.get('/getJoinData', admissionController.getJoinData)
route.get('/getJoinDataa', admissionController.getSessionAdmission)
module.exports=route