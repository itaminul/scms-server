const admission = require('../models/admissionModel')
const session = require('../models/setup/sessionModel')
const { Admissions } = require('../models/setup/admissionJoin')
exports.getAll = async(req, res) => {
    try {
        const admissionData = await admission.find()
        res.send(admissionData)        
    } catch (error) {
        res.send(error)        
    }
}

exports.create = async(req, res) => {
    try {
        const admissionData = await admission.create(req.body)
        res.send(admissionData)
    } catch (error) {
        res.send(error)
        
    }
}

exports.getJoinData = (req, res) => {
    Admissions.aggregate([
       {
        $lookup:
        {
            from: 'sessions',
            localField: 'sessionId',
            foreignField:'sessionId',
            as: 'sessiondetails'
        }
       },
       {
         $unwind: "$sessiondetails"
       }
        ]).then((result) => {
            console.log(result);
            res.send(result)
        })
        .catch((error) => {
            console.log(error);
        });
}