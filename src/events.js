const requireDir = require('require-dir');
service = requireDir('./app/services');

const events = (io) => {
    io.on('connection', function (socket) {
        socket.auth = false;

        setTimeout(function () {
            if (!socket.auth) {
                socket.disconnect();
                console.log("disconnect");
            }
        }, 30000);

        service.AuthService(socket);
        service.TrinityService(socket);
    });
}

module.exports = events;
