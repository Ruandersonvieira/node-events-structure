require('dotenv/config');
const server = require('./config/server');
const socketio = require('socket.io');
var io = socketio.listen(server.server);

// require('.events')(io);

io.sockets.on('connection', function (socket) {
    console.log('Entrou no evento')
    socket.on('oi', function (data) {
            console.log(data);
            socket.emit('news', { hello: 'world' });
    });
});

server.listen(process.env.APP_PORT, () => {
    console.log(`${server.name} listening at ${server.url}`);
});