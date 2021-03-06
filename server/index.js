const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path'); 

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUserById, getUsersInRoom } = require('./helpers');

app.use(express.static('build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

// Socket.io setups
io.on('connect', (socket) => {
    // Socket receives the join keyword from client
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        // Socket emits the welcome message to every users in the room and joined user
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room!` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        socket.join(user.room);

        callback();
    });

    // Socket receives the sendMessage keyword from client
    socket.on('sendMessage', (message, callback) => {
        const user = getUserById(socket.id);

        // Socket emits the message from one user to others
        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left!` });
        };
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`App is running on port ${PORT}`));