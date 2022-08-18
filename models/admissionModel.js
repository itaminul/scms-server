const mongoose = require('mongoose')
const admissionSchema = mongoose.Schema({
    dId: {
        type: String
    },
    degreeId: {
        type: Number
    },
    sessionId: {
        type: Number,
    }

})

const admission = mongoose.model('Admission', admissionSchema)
module.exports = admission