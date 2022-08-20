const User = require('../../models/auth/user')
const {StatusCodes} = require('http-status-codes')
exports.register = async(req, res) => {  
        const [ name, email, password] = req.body

        if(!name || !email || !password) {
            throw new Error('Please provide all values')
        }

        const user = await User.create(req.body)
        res.status(StatusCodes.OK).json({user})

}
exports.loign = async(req, res) => {
    res.send('register user')
}
exports.update = async(req, res) => {
    res.send('register user')
}

