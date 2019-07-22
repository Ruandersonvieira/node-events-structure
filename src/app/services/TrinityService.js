const TrinityService = (socket) => {
    sub.subscribe('redis.user.accessServer');

    sub.on('message', function(chan, msg) {
        if (chan === "redis.user.accessServer") {
            console.log(`${socket.id} >> listen event: redis.user.accessServer`);
            console.log(`${socket.id} >> execute event: trinity.user.page.accessed`);
            
            return socket.broadcast.emit('trinity.user.page.accessed', msg);
        }
    });

    socket.on('trinity.user.page.leaving', function (data) {
        console.log(`${socket.id} >> executing listen: trinity.user.page.leaving`);
        console.log(`${socket.id} >> executing event: trinity.user.page.leaving`);
      
        return socket.broadcast.emit('trinity.user.page.quit', JSON.stringify({"serverId" : data.trinityId, "usersViews":res }));
    });
};

module.exports = TrinityService;