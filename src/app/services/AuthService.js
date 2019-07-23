const crypt = require('crypto');
let token;
function getToken(data) {
    let toHash = data.user + '.' + data.serviceInfo + '.' + process.env.TOKEN_ENCRYPTION;
    return crypt.createHash('md5').update(toHash).digest('hex');
}

const AuthService = (socket) => {
    socket.on('event.auth.tokenGet', function (data) {
        data = JSON.parse(data);
        token = getToken(data);
        
        return socket.emit('event.auth.tokenSend', { token });
    });

    socket.on('event.auth.tokenVerify', function (data) {
        data = JSON.parse(data);
        token = getToken(data);
        
        if (token !== data.token) {
            console.log(`Unauthorized connection: ${socket.id}`);
            
            return socket.disconnect();
        }else {
            console.log(`Authorized connection: ${socket.id}`);
            
            return socket.auth = true;
        }
    });
};

module.exports = AuthService;