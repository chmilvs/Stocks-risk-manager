const http = require('http');

const app = require('./app');

const port = process.env.PORT || 4000;
// const wsPort = process.env.PORT || 8080

const server = http.createServer(app);
// const wsServer = http.createServer()

// const io = require('socket.io')(wsServer, {
//     serveClient: false,
//     pingInterval: 10000,
//     pingTimeout: 5000,
//     cookie: false
// });





wsServer.listen(wsPort,()=>{
    console.log('WS server started on '+ wsPort)
})
server.listen(port, () => console.log(`
***
Listen to server${port}
***`));


