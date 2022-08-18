const admission = require('../models/admissionModel')
const { Admissions } = require('../models/setup/admissionJoin')
const { Admissionsnew } = require('../models/setup/degereeSessionAdmission')
// const Degrees = require('../models/setup/degreeModel')
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

exports.getJoinByString = (req, res) => {
    Admissionsnew.aggregate([
        { "$project": { "dId": { "$toString": "$_id" }}},   
           {
            $lookup:{
                from: 'degrees',
                localField: 'dId',
                foreignField:'_id',
                as: 'dida'
            }
        },
        {
          $unwind: "$dida"
        }
    ]).then((result) => {
        console.log(result);
        res.send(result)

    }).catch((error) => {

    })



}

exports.getSessionAdmission = (req, res) => {
    Admissionsnew.aggregate([
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
           },
       
           {
            $lookup:{
                from: 'degrees',
                localField: 'degreeId',
                foreignField:'degreeId',
                as: 'degreedetailsa'
            }
        },
        {
          $unwind: "$degreedetailsa"
        }
    ]).then((result) => {
        console.log(result);
        res.send(result)

    }).catch((error) => {

    })

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