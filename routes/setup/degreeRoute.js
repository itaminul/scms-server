const express=require("express")
const router=express.Router()
const DegreeController = require('../../controller/setup/degreeController')

router.get('/getAll', DegreeController.getAll);
router.post('/create', DegreeController.create);

module.exports = router;