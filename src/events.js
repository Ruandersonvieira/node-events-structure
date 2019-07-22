const requireDir = require('require-dir');
service = requireDir('./app/services');
// let sub, pub = require('./config/redis');

const events = (io, sub, pub) => {
    io.on('connection', function (socket) {
        console.log(`Connect ${socket.id}`);
        socket.auth = false;
        sub.subscribe('redis.user.accessServer');


        setTimeout(function () {
            if (!socket.auth) {
                socket.disconnect();
                console.log(`Disconnect ${socket.id}`);
            }
        }, 30000);

        service.AuthService(socket);
        service.TrinityService(socket,sub);
    });
}

module.exports = events;
