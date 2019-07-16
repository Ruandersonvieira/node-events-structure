const urlRedis = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

const redisClient = redis.createClient(urlRedis);

module.exports = redisClient;