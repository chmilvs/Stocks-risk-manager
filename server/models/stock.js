const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
   price:Number,
    amountBuyed:Number,
    tickerName:String,
})

module.exports = mongoose.model('User', stockSchema)
