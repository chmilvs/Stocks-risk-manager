const io = require('../server')
const {userJoin,userLeave,getCurrentUserUser} = require('./chatUtils/utils')
io.on('connection',(socket)=>{
    const user = userJoin(socket.id,username,roomid)
    socket.join(user.room)

    socket.emit("message",{
        userId:user.id,
        username:user.username,
        text:`Здравствуй ${user.username}! Чем могу помочь?`
    })
    socket.broadcast.to(user.room).emit('message',{
        userId:user.id,
        username:user.username,
        text:`${user.username} присоединился к чату.`
        }
    )
    socket.on("chat",(text)=>{
        let user = getCurrentUserUser(socket.id)
        io.to(user.room).emit('message',{
            userId:user.id,
            username:user.username,
            text:text
        })

    })

})