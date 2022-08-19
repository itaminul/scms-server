const express = require('express')
const router = express.Router();
const { register, loign, update } = require('../../controller/auth/authController')
router.post('/register',register);
router.post('/loign',loign);
router.patch('/update',update);
module.exports= router;