const { instrument } = require('@socket.io/admin-ui');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = require('./app');

require('dotenv').config();

const httpServer = createServer(app);
const io = new Server (httpServer, {
    cors: {
        origin: ['https://client-tst-production.up.railway.app'],
        methods: ['GET', 'POST'],
        credentials: true,
    },
});

//admin-ui
instrument(io, { auth: false });

//when connect send chat (edit this)
io.on('connection', socket => {
    console.log('user connected');
    socket.on('set-id', (roomID) => {
        socket.join(roomID);
        console.log('room joined')
    })

    //TODO
    socket.on('send-message', (message, storedID) => {
        socket.broadcast.to(storedID).emit('recieve-message', message); //TODO implement encrypt
    })
});

//Start server
const PORT = 8071;
httpServer.listen(PORT, () => {
    console.log(`Server is running on https://raylaidchat.codebloop.my.id`);
});


// //userfunction
// function getUsernameFromToken(token){
//     return token;   
// }
