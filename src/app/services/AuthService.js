const crypt = require('crypto');

const AuthService = (socket) => {
    socket.on('auth.login', function (data) {
        toHash = data.user + '.' + data.serviceInfo + '.' + process.env.TOKEN_ENCRYPTION;
        const token = crypt.createHash('md5').update(toHash).digest('hex');
        socket.emit('auth.token', { token });
    });
    socket.on('auth.verify', function (data) {
        toHash = data.user + '.' + data.serviceInfo + '.' + process.env.TOKEN_ENCRYPTION;
        const token = crypt.createHash('md5').update(toHash).digest('hex');
        if (data.token !== token) {
            console.log(`Unauthorized connection: ${socket.id}`);
            return socket.disconnect();
        }else {
            console.log(`Authorized connection: ${socket.id}`);
            return socket.auth = true;
        }
    });

};

module.exports = AuthService;