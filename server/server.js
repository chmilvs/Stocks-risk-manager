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


module.exports = io




