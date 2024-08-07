// utils/redis.js
import redis from 'redis';

class RedisClient {
    constructor() {
        this.client = redis.createClient();
        this.client.on('error', (err) => {
            console.error('Redis error:', err);
        });
    }

    isAlive() {
        // In Redis, there's no direct way to check if the connection is alive.
        // A common approach is to check if `ping` command succeeds.
        return new Promise((resolve) => {
            this.client.ping((err) => {
                if (err) {
                    console.error('Ping error:', err);
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        });
    }

    async get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, value) => {
                if (err) {
                    return reject(err);
                }
                resolve(value);
            });
        });
    }

    async set(key, value, duration) {
        return new Promise((resolve, reject) => {
            this.client.setex(key, duration, value, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    async del(key) {
        return new Promise((resolve, reject) => {
            this.client.del(key, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}

// Create and export an instance of RedisClient
const redisClient = new RedisClient();
export default redisClient;
