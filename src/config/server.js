const restify = require('restify');

const server = restify.createServer({
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
});

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:true,
    overrideParams:false
}));

require('../routes')(server)

module.exports = server;
