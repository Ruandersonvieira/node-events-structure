const FirstService = (socket) => {
    socket.on('oi', function (data) {
        console.log(data);
        socket.emit('news', { hello: 'world' });
    });
};

module.exports = FirstService;