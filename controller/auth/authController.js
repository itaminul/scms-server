const User = require('../../models/auth/user')
exports.register = async(req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({user})
    } catch (error) {
        next(error)
        //res.status(500).json({ msg: 'There was an error'})
        
    }
}
exports.loign = async(req, res) => {
    res.send('register user')
}
exports.update = async(req, res) => {
    res.send('register user')
}

