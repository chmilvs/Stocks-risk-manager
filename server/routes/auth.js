const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const saltRounds = 12;
const { body, validationResult } = require('express-validator');
const privateKey = process.env.SECRET_KEY


router

    .post("/register",
        body('username').notEmpty(),
        body('email').notEmpty(),
        body('password').isLength({min:3}),async (req, res) => {
        const errors = validationResult(req)
            if(!errors.isEmpty()){
            return res.status(400).json({success:false,message:errors.array()})
            }
            else {
                let {email, password, username,deposit} = req.body;
                let phone = null;
                if (req.body.phone) {
                    phone = req.body.phone;
                }
                try {
                    const user = await new User({
                        username,
                        email,
                        password: await bcrypt.hash(password, saltRounds),
                        phone,
                        deposit
                    });
                    await user.save();
                    const token = await jwt.sign(
                        {
                            _id: user._id,
                        },
                        privateKey,
                        {expiresIn: 60 * 360}
                    );
                    user.populate('stocks')
                    res.status(200).json({
                        success: true,
                        token,
                        user: {username: user.username, deposit:user.deposit, email: user.email, phone: user.phone, stocks: user.stocks},
                    });
                } catch (err) {
                    res.status(400).json({success: false, message: err.message.toString()});
                }
            }
    })

    .post("/login",
        body('username').notEmpty(),
        async (req, res) => {
        const {username, password} = req.body;
        const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({success:false,message:errors.array()})
            }
            else {
                try {
                    const user = await User.findOne({username: username}).populate('stocks');
                    if (user && (await bcrypt.compare(password, user.password))) {
                        const token = await jwt.sign(
                            {
                                _id: user._id,
                            },
                            privateKey,
                            {expiresIn: 60 * 360}
                        );
                        const {username, email, phone, stocks,deposit} = user;
                        res.status(200).json({
                            success: true,
                            token,
                            user: {username, email, phone, stocks, deposit},
                        });
                    } else if (user) res.json({success: false, message: 'Неверный пароль!'});
                    else res.json({success: false, message: 'Такого пользователя нет в системе!'});
                } catch (err) {
                    res.status(400).json({success: false, message: err.message});
                }
            }
    })

    .post("/", async (req, res) => {
        const {token} = req.body;
        try {
            await jwt.verify(token, privateKey, async (err, decoded) => {
                if (err) {
                    res.json({success: false, message: "Auth token expired"});
                } else {
                    const user = await User.findById(decoded._id).populate('stocks');
                    let sortFunction = (a, b) => {
                      if(a.tickerName < b.tickerName) { return -1; }
                      if(a.tickerName > b.tickerName) { return 1; }
                      return 0;
                     }
                     
                    res.json({
                        success: true,
                        user: {username: user.username, deposit:user.deposit, email: user.email, phone: user.phone, stocks: user.stocks.sort(sortFunction)}
                    })
                }
            });
        } catch (err) {
            res.json({success: false, message: err.message});
        }
    })


.post('/update',async(req,res)=>{
    let {email,username,deposit,phone,token} = req.body;
    try {
        await jwt.verify(token, privateKey, async (err, decoded) => {
            if (err) {
                res.json({success: false, message: "Auth token expired"});
            } else {
                let user = await User.findOneAndUpdate({_id:decoded._id},{email,username,deposit,phone});

                // await user.save()
                user = await User.findById(decoded._id).populate('stocks')
                let sortFunction = (a, b) => {
                    if(a.tickerName < b.tickerName) { return -1; }
                    if(a.tickerName > b.tickerName) { return 1; }
                    return 0;
                }

                res.json({
                    success: true,
                    user: {username: user.username, deposit:user.deposit, email: user.email, phone: user.phone, stocks: user.stocks.sort(sortFunction)}
                })
            }
        });
    } catch (err) {
        res.status(400).json({success: false, message: err.message.toString()});
    }

})
    .post('/credentials',async (req,res) => {
    const {username,email} = req.body
        try {
            const user = await User.findOne({username}) || await User.findOne({email})
            if (user) res.json({success: false})
            else {
                res.json({success: true})
            }
        }
        catch (err){
        res.json({success:false,message:err.message})
        }
})


module.exports = router
