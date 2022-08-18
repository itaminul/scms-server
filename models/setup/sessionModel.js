const mongooes = require('mongoose')
const sessonSchema = mongooes.Schema({
    sessionId:{
        type: Number
    },
    sessionName: {
        type: String,
        required: true
    },
    activeStatus: {
        type: Number,
        default:1
    }
})

const session= mongooes.model('Session', sessonSchema)
module.exports= session