const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const saltRounds = 12;
const privateKey = '1q2w3e4r5t6y7u8i9o0p-[=]'


router

    .post("/register", async (req, res) => {
        let {email, password, username} = req.body;
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
            });
            await user.save();
            const token = await jwt.sign(
                {
                    _id: user._id,
                },
                privateKey,
                {expiresIn: 60 * 360}
            );

            res.json({
                success: true,
                token,
                user: {username: user.username, email: user.email, phone: user.phone, stocks: user.stocks},
            });
        } catch (err) {
            res.json({success: false, message: err.message.toString()});
        }
    })

    .post("/login", async (req, res) => {
        const {username, password} = req.body;
        try {
            const user = await User.findOne({username: username});
            if (user && (await bcrypt.compare(password, user.password))) {
                const token = await jwt.sign(
                    {
                        _id: user._id,
                    },
                    privateKey,
                    {expiresIn: 60 * 360}
                );
                const {username, email, phone, stocks} = user;
                res.json({
                    success: true,
                    token,
                    user: {username, email, phone, stocks},
                });
            } else if (user) res.json({success: false, message: "Wrong password"});
            else res.json({success: false, message: "No such user"});
        } catch (err) {
            res.json({success: false, message: err.message});
        }
    })

    .post("/", async (req, res) => {
        const {token} = req.body;
        try {
            await jwt.verify(token, privateKey, async (err, decoded) => {
                if (err) {
                    res.json({success: false, message: "Auth token expired"});
                } else {
                    const user = await User.findById(decoded._id);
                    res.json({
                        success: true,
                        user: {username: user.username, email: user.email, phone: user.phone, stocks: user.stocks}
                    })
                }
            });
        } catch (err) {
            res.json({success: false, message: err.message});
        }
    });

module.exports = router
