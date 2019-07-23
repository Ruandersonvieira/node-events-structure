const RedisService = (socket) => {
    sub.subscribe('trinity.whatsapp.serverPageAccessedByUser');

    sub.on('message', function(channel, msg) {
        if (channel === "trinity.whatsapp.serverPageAccessedByUser") {
            console.log(`${socket.id} >> listen event: trinity.whatsapp.serverPageAccessedByUser`);
            console.log(`${socket.id} >> execute event: redis.whatsapp.serverPageAccessedByUser`);

            return socket.broadcast.emit('redis.whatsapp.serverPageAccessedByUser', msg);
        } else if (channel === "trinity.whatsapp.serverPageAccessedByUser") {
            console.log(`${socket.id} >> listen event: trinity.whatsapp.serverPageAccessedByUser`);
            console.log(`${socket.id} >> execute event: redis.whatsapp.serverPageAccessedByUser`);

            return socket.broadcast.emit('redis.whatsapp.serverPageLeavingByUser', msg);
        }
    });
};

module.exports = RedisService;