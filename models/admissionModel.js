const mongoose = require('mongoose')
const admissionSchema = mongoose.Schema({
    degreeId: {
        type: String
    },
    sessionId: {
        type: Number,
    }

})

const admission = mongoose.model('Admission', admissionSchema)
module.exports = admission