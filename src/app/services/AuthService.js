const crypt = require('crypto');

const AuthService = (socket) => {
    socket.on('auth.login', function (data) {
        data = JSON.parse(data);
        toHash = data.user + '.' + data.serviceInfo + '.' + process.env.JWT_ENCRYPTION;
        const token = crypt.createHash('md5').update(toHash).digest('hex');
        socket.emit('auth.token', { token });
    });
    socket.on('auth.verify', function (data) {
        data = JSON.parse(data);
        toHash = data.user + '.' + data.serviceInfo + '.' + process.env.JWT_ENCRYPTION;
        const token = crypt.createHash('md5').update(toHash).digest('hex');
        if (data.token !== token) {
            return socket.disconnect();
        }else {
            socket.auth = true;
            console.log(socket.auth);
        }
    });

};

module.exports = AuthService;