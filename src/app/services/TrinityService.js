const [pub, sub, redisClient] = require('../../config/redis');

const TrinityService = (socket) => {
    sub.on('message', function(chan, msg) {
        pub.hgetall(msg, function(err, res) {
        console.log('trinity.user.updatePage');
        socket.emit('trinity.user.updatePage', msg);
      });
    });
  
    sub.subscribe('userAccessServer');

    socket.on('trinity.user.leavingPage', function (data) {
        console.log('trinity.user.leavingPage');
        redisClient.get(data.trinityId +":viewers", function(err, res) {
            res = JSON.parse(res)
            delete res[data.iduser]
            redisClient.setex(data.trinityId +":viewers", 250, JSON.stringify(res));
            socket.emit('userAccessServer', JSON.stringify({"serverId" : data.trinityId, "usersViews":res }));
        });
    });
};

module.exports = TrinityService;