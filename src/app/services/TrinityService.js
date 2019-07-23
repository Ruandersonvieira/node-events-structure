const TrinityService = (socket) => {
    socket.on('redis.whatsapp.serverPageAccessedByUser', function (msg) {
        console.log(`${socket.id} >> executing listen: redis.whatsapp.serverPageAccessedByUser`);
        console.log(`${socket.id} >> executing event: trinity.whatsapp.serverPageAccessedByUser`);
      
        return socket.broadcast.emit('event.whatsapp.serverPageAccessedByUser', msg);
    });

    socket.on('redis.whatsapp.serverPageLeavingByUser', function (msg) {
        console.log(`${socket.id} >> executing listen: redis.whatsapp.serverPageLeavingByUser`);
        console.log(`${socket.id} >> executing event: event.whatsapp.serverPageLeavingByUser`);
      
        return socket.broadcast.emit('event.whatsapp.serverPageLeavingByUser', msg);
    });
};

module.exports = TrinityService;