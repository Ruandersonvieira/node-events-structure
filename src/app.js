require('dotenv/config');
const server = require('./config/server');
const io = require('socket.io')(server);
// require('.events')(io);

io.on('connection', function(socket) {  
    socket.emit('announcements', { message: 'A new user has joined!' });
});

server.listen(process.env.APP_PORT, () => {
    console.log(`${server.name} listening at ${server.url}`);
});