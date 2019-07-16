const requireDir = require('require-dir');
service = requireDir('./app/services');

const events = (io) => {
    io.on('connection', function (socket) {
        console.log('Entrou no evento')
        socket.auth = false;
        setTimeout(function () {
            if (!socket.auth) {
                socket.disconnect();
                console.log("disconnect");
            }
        }, 30000);

        service.AuthService(socket);
    });
}

module.exports = events;
