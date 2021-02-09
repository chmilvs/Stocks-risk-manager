import Stock from '../models/stock'
import User from '../models/user'
import jwt from 'jsonwebtoken'
const router = express.Router()
const privateKey = '1q2w3e4r5t6y7u8i9o0p-[=]'

const router = Express()

router

.post('/',async (req,res)=>{
    const {price,amountBuyed,tickerName,token,} = req.body
    try {
        await jwt.verify(token, privateKey, async (err, decoded) => {
            if (err) {
                res.json({success: false, message: "Auth token expired"});
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
                res.json({
                    success: true,
                    stock
                })
            }
        });
    } catch (err) {
        res.json({success: false, message: err.message});
    }
})