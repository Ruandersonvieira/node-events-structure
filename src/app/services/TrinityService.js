const [sub, redisClient] = require('../../config/redis');

const TrinityService = (socket) => {
    sub.subscribe('redis.user.accessServer');

    sub.on('message', function(chan, msg) {
        if (chan === "redis.user.accessServer") {
            console.log('Executing event: redis.user.accessServer');
            console.log('Execute event: trinity.user.page.accessed');
            
            return socket.broadcast.emit('trinity.user.page.accessed', msg);
        }
    });

    socket.on('trinity.user.page.leaving', function (data) {
        console.log('Executing event: trinity.user.page.leaving');
        data = JSON.parse(data);
      
        redisClient.get(data.trinityId +":viewers", function(err, res) {
            if (res){
                res = JSON.parse(res, true);
                delete res[data.iduser];
                redisClient.setex(data.trinityId +":viewers", 250, JSON.stringify(res));
                console.log('Execute event: trinity.user.page.quit');
                socket.emit('trinity.user.page.quit', JSON.stringify({"serverId" : data.trinityId, "usersViews":res }));
                return socket.broadcast.emit('trinity.user.page.quit', JSON.stringify({"serverId" : data.trinityId, "usersViews":res }));
            }
        });
    });
};

module.exports = TrinityService;