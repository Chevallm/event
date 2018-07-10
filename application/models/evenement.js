const mongoose = require('mongoose')

const EvenementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

const Evenement = mongoose.model('Evenement', EvenementSchema)

module.exports = Evenement