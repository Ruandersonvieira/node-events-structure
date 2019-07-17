const redis = require('redis');
const urlRedis = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

const pub = redis.createClient(urlRedis);
const sub = redis.createClient(urlRedis);
const redisClient = redis.createClient(urlRedis);

module.exports = [ pub, sub, redisClient ];