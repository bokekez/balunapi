const mongoose = require('mongoose')

const terminiSchema = new mongoose.Schema({
    termin: {
        type: Date,
        required: true,
        default: Date.now
    },
    igrač1: {
        type: String,
    },
    igrač1G: {
        type: Number,
    },
    igrač2: {
        type: String,
    },
    igrač2G: {
        type: Number,
    },
    igrač3: {
        type: String,
    },
    igrač3G: {
        type: Number,
    },
    igrač4: {
        type: String,
    },
    igrač4G: {
        type: Number,
    },
    igrač5: {
        type: String,
    },
    igrač5G: {
        type: Number,
    },
    igrač6: {
        type: String,
    },
    igrač6G: {
        type: Number,
    },
    igrač7: {
        type: String,
    },
    igrač7G: {
        type: Number,
    },
    igrač8: {
        type: String,
    },
    igrač8G: {
        type: Number,
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)