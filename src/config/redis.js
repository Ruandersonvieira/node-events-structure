const redis = require('redis');
const urlRedis = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

const sub = redis.createClient(urlRedis);
const redisClient = redis.createClient(urlRedis);

module.exports = [ sub, redisClient ];