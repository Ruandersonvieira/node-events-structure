const redisClient = require('../../config/redis');

const TrinityService = (socket) => {
    redisClient.on('message', function(chan, msg) {
        redisClient.hgetall(msg, function(err, res) {
        console.log(msg);
        socket.emit('trinity.user.updatePage', msg);
      });
    });
  
    redisClient.subscribe('userAccessServer');

    socket.on('trinity.user.leavingPage', function (data) {
        redisClient.get(data.trinityId +":viewers", function(err, res) {
            res = JSON.parse(res)
            delete res[data.iduser]
            redisClient.setex(data.trinityId +":viewers", 250, JSON.stringify(res));
            socket.emit('trinity.user.leavelPage', JSON.stringify({"serverId" : data.trinityId, "usersViews":res }));
        });
    });
};

module.exports = TrinityService;