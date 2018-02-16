const express = require('express');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('new client');
  socket.on('chat message', (data) => {
    console.log(data);
    io.emit('chat message', data);
  });
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});
