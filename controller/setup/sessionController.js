const sessionModel = require('../../models/setup/sessionModel')
exports.getAll = async(req, res) => {
    try {
        const sessionData = await sessionModel.find()
        res.send(sessionData)
    } catch (error) {
        res.send(error)
        
    }
}

exports.create = async(req, res) => {
    try {
        const createSession = await sessionModel.create(req.body);
        res.status(200).json({mesage: 'Success'})

    } catch (error) {
        res.status(400).json({error})
        
    }

}