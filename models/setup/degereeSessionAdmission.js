const mongoose = require('mongoose')
Schema = mongoose.Schema;

const admissionsp = new mongoose.Schema({
    sessionId: Number,
    degreeId: String
})

const degrees = new mongoose.Schema({
    _id: Number,
    degreeName: String
})

const sessionnew = new mongoose.Schema({
    sessionId: Number,
    sessionName: String
})


const Admissionsnew = new mongoose.model("admissions", admissionsp)
const Degrees = new mongoose.model("degrees", degrees)
const Sessionnew = new mongoose.model("sessioddn", sessionnew)
module.exports = {Admissionsnew, Degrees, Sessionnew}
