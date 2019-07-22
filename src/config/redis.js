const redis = require('redis');
const urlRedis = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

sub = redis.createClient(urlRedis);
pub = redis.createClient(urlRedis);

module.exports = sub, pub ;