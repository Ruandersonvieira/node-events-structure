const requireDir = require('require-dir');
service = requireDir('./app/services');

const events = (io) => {
    io.on('connection', function (socket) {
        console.log('Entrou no evento')
        service.AuthService(socket)
    });
}

module.exports = events;
