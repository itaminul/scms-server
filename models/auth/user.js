const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserSchems = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minilength: 6

    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'lastName'
    }

})

UserSchems.pre('save', async function() {
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

UserSchems.methods.createJWT = function() {
    return jwt.sign({userId:this._id}, 'jwtSecret', {expiresIn: '1d'})
}

const User = mongoose.model('Users', UserSchems)
module.exports= User