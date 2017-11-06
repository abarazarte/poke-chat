/*
 * Module dependencies
 */

import express from 'express';
import http from 'http';
import engine from 'socket.io';

const port = 3000;
const app = express();

// Static route
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let server = http.createServer(app)
  .listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
  });

const io = engine.listen(server);
io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});