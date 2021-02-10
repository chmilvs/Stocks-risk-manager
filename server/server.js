const http = require('http');
const app = require('./app');
const wsapp = require('./wsServer')
const server = http.createServer(app);
const wsServer = http.createServer(wsapp)


const wsPort = process.env.WSPORT || 8080
const port = process.env.PORT || 4000;
const io = require('socket.io')(wsServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET"]
    },
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

console.log(port,wsPort)

wsServer.listen(wsPort, () => console.log(`
***
Listen to server${wsPort}
***`));



server.listen(port, () => console.log(`
***
Listen to server${port}
***`));

const {userJoin,userLeave,getCurrentUser} = require('./chat/chatUtils/utils')
io.on('connection',(socket)=> {

    socket.on('joinRoom', ({username, roomname}) => {
        console.log(roomname,username)
        const user = userJoin(socket.id, username, roomname)
        socket.join(user.room)
        if(username=='Admin'){
            const rooms = socket.adapter.rooms
            socket.emit('message',({rooms}))
        }


        socket.emit("message", {
            userId: user.id,
            username: user.username,
            text: `Здравствуй ${user.username}! Чем могу помочь?`
        })
        socket.broadcast.to(user.room).emit('message', {
                userId: user.id,
                username: user.username,
                text: `${user.username} присоединился к чату.`
            }
        )
        socket.on("chat", (text) => {
            let user = getCurrentUser(socket.id)
            io.to(user.room).emit('message', {
                userId: user.id,
                username: user.username,
                text: text
            })
            socket.on("disconnect", () => {
                // * delete user from users & emit that user has left the chat
                const user = userLeave(socket.id);
                console.log('here')
                if (user) {
                    io.to(user.room).emit("message", {
                        userId: user.id,
                        username: user.username,
                        text: `${user.username} has left the chat`,
                    });
                }
            });

        })
    })
})




