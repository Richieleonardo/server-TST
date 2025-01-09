const { instrument } = require('@socket.io/admin-ui');
const { createServer } = require('http');
const { Server } = require('socket.io');

const fs = require('fs');
const https = require('https');

const privateKey =
const certificate =

const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);
const app = require('./app');

require('dotenv').config();

// const httpServer = createServer(app);
const io = new Server (httpsServer, {
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
httpsServer.listen(PORT, () => {
    console.log(`Server is running on https://raylaidchat.codebloop.my.id`);
});


// //userfunction
// function getUsernameFromToken(token){
//     return token;   
// }
