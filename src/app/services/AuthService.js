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
        console.log(token);
        console.log(data.token);
        if(data.token === token) {
            console.log("Token igual")
        } else{
            console.log("Token Diferente")
        }
    });
};

module.exports = AuthService;