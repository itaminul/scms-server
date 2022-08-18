const mongoose = require('mongoose')
Schema = mongoose.Schema;
const admissions = new mongoose.Schema({
    _id: Number,
    sessionId: Number,
   // sessions: [{ type: Schema.Types.ObjectId, ref: 'admissiond'}]
})

const sessions = new mongoose.Schema({
    _id: Number,
    sessionId: Number,
    sessionName: String
})

const Admissions = new mongoose.model("admission", admissions)
const Sessions = new mongoose.model("sessin", sessions)
module.exports = {Admissions, Sessions}
