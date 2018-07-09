const mongoose = require('mongoose')

const EvenementSchema = mongoose.Schema({
    title: String
})

const Evenement = mongoose.model('Evenement', EvenementSchema)

module.exports = Evenement