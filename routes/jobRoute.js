const express = require('express')
const router =  express.Router();

const authController = require('../controller/job/jobController')

router.get('/getAll', authController.getAll)
router.post('/create', authController.create)
router.patch('/update', authController.update)
module.exports = router