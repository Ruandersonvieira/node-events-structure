require('dotenv/config');
require('./config/redis');
const server = require('./config/server');
let io = require('socket.io').listen(server.server);

require('./events')(io);

server.listen(process.env.APP_PORT, () => {
    console.log(`${server.name} listening at ${server.url}`);
});