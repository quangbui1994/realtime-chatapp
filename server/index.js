const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./routes/route');

app.use(router);

// Socket.io setups
io.on('connect', (socket) => {
    console.log('New user joined');

    socket.on('disconnect', () => {
        console.log('User had left');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`App is running on port ${PORT}`));