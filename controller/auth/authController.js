const User = require('../../models/auth/user')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError } = require('../../errors')
exports.register = async(req, res) => {  
        const { name, email, password }  = req.body

        if(!name || !email || !password) {
            throw new BadRequestError('Please provide all values')
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) {
            throw new BadRequestError('Email already exist')
        }

        const user = await User.create({name, email, password})
        res.status(StatusCodes.OK).json({user})

}
exports.loign = async(req, res) => {
    res.send('register user')
}
exports.update = async(req, res) => {
    res.send('register user')
}

