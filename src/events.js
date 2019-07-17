const requireDir = require('require-dir');
service = requireDir('./app/services');

const events = (io) => {
    io.on('connection', function (socket) {
        console.log(`Connect ${socket.id}`);
        socket.auth = false;

        setTimeout(function () {
            if (!socket.auth) {
                socket.disconnect();
                console.log(`Disconnect ${socket.id}`);
            }
        }, 30000);

        service.AuthService(socket);
        service.TrinityService(socket);
    });
}

module.exports = events;
