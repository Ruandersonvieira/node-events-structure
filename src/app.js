require('dotenv/config');
const server = require('./config/server');
const socketio = require('socket.io');
var io = socketio.listen(server.server);

require('./events')(io);

server.listen(process.env.APP_PORT, () => {
    console.log(`${server.name} listening at ${server.url}`);
});