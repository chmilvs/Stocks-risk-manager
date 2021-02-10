const Stock = require('../models/stock')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const {body, validationResult} = require('express-validator');
const privateKey = '1q2w3e4r5t6y7u8i9o0p-[=]'


router

    .post('/',
        body('price').exists(),
        body('amountBuyed').exists(),
        body('tickerName').exists(),
        async (req, res) => {
            const errors = validationResult(req)
            if (!errors) {
                return res.status(400).json({success: false, message: errors.array()})
            }
            const { price, amountBuyed, tickerName, token } = req.body

            try {
                await jwt.verify(token, privateKey, async (err, decoded) => {
                    if (err) {
                        res.status(400).json({success: false, message: "Auth token expired"});
                    } else {
                        const user = await User.findById(decoded._id);
                        const stock = await new Stock({
                            price,
                            amountBuyed,
                            tickerName
                        })
                        user.stocks.push(stock)
                        await stock.save()
                        await user.save()
                        res.status(200).json({
                            success: true,
                            stock
                        })
                    }
                });
            } catch (err) {
                res.status(400).json({success: false, message: err.message});
            }
        })

module.exports = router
