const redis = require('redis');
const urlRedis = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

global.sub = redis.createClient(urlRedis);
global.pub = redis.createClient(urlRedis);

module.exports = sub, pub;