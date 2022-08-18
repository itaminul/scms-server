const DegreeModel = require('../../models/setup/degreeModel')
exports.getAll = async(req, res) =>{
    try {
        const result =await DegreeModel.find()
        console.log(result)
        res.send(result);
    } catch (error) {
        res.json('error')
        
    }
}

exports.create = async(req, res) => {
    try {
        const newDegree = await DegreeModel.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                tour: newDegree
            }
        })        
        } catch (error) {
            res.status(400).json({
            status: 'fail',
            message: error
            })        
        }
}