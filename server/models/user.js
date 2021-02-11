const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    phone: String,
    stocks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Stock'}],
    password: {type: String, required: true},
    deposit:String
})

module.exports = mongoose.model('User', userSchema)
