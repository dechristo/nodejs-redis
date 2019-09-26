
import { Logger } from "../utils/Logger";

const asyncRedis = require("async-redis");

export class RedisService implements ICacheService {

    private redisClient: any;

    constructor() {
        this.redisClient = asyncRedis.createClient(6379);

        this.redisClient.on("error", (err: any) => {
            Logger.error("Error initializing redis server", err);
        });

        this.redisClient.on("ready", (err: any) => {
            Logger.info("Redis server up and running...");
        });
    }

    public async add(key: string, data: string, expireInSeconds: number): Promise<any> {
        if (this.redisClient) {
            let cachedResult;

            try {
                cachedResult = await this.get(key);
                Logger.info("Object already in cache.");

                if (!cachedResult) {
                    Logger.info("Storing object in cache...");
                    await this.redisClient.set("a", JSON.stringify(data));
                    await this.redisClient.expire("a", expireInSeconds);
                    Logger.info("Object cached.");
                }
            } catch (ex) {
                Logger.error("Error setting the cache:", ex);
            }
        }
    }

    public async get(key: string): Promise<object | null> {
       if (this.redisClient) {
            try {
                return await this.redisClient.get("a");

            } catch (ex) {
                Logger.error("Error retrieving from the cache:", ex);
            }
        }

       return null;
    }
}
