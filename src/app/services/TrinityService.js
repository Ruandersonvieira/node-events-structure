const [sub, redisClient] = require('../../config/redis');

const TrinityService = (socket) => {
    sub.subscribe('redis.user.accessServer');

    sub.on('message', function(chan, msg) {
        if (chan === "redis.user.accessServer") {
            console.log('Execute event: trinity.user.page.accessed');

            return socket.emit('trinity.user.page.accessed', msg);
        }
    });

    socket.on('trinity.user.page.leaving', function (data) {
        console.log('Execute event: trinity.user.page.leaving');
        data = JSON.parse(data);

        redisClient.get(data.trinityId +":viewers", function(err, res) {
            res = JSON.parse(res);
            ///res = JSON.parse(res); 
            console.log(typeof(res));
        

            //console.log(res.usersViews)
            //let x = delete res.usersViews[data.iduser]
            //console.log(x);

           //x = JSON.stringify(res)
            console.log(res)
            //redisClient.setex(data.trinityId +":viewers", 250, JSON.stringify(res));
            //socket.emit('userAccessServer', JSON.stringify({"serverId" : data.trinityId, "usersViews":res }));
        });
    });
};

module.exports = TrinityService;