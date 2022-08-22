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

        const user = await User.create({ name, email, password})
        const token = user.createJWT()

        res
        .status(StatusCodes.OK)
        .json({
            user: {
                email: user.email,
                lastName: user.lastName,
                location: user.location,
                name: user.name,
            },
            token,
            location: user.location
        })

}
exports.loign = async(req, res) => {
    res.send('register user')
}
exports.update = async(req, res) => {
    res.send('register user')
    User.findOneAndUpdate()
}

