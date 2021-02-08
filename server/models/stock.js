const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    phone: String,
    stocks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Stock'}],
    password: {type: String, required: true},
})

module.exports = mongoose.model('User', stockSchema)
