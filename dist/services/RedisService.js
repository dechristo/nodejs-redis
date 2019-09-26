"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../utils/Logger");
const asyncRedis = require("async-redis");
class RedisService {
    constructor() {
        this.redisClient = asyncRedis.createClient(6379);
        this.redisClient.on("error", (err) => {
            Logger_1.Logger.error("Error initializing redis server", err);
        });
        this.redisClient.on("ready", (err) => {
            Logger_1.Logger.info("Redis server up and running...");
        });
    }
    add(key, data, expireInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.redisClient) {
                let cachedResult;
                try {
                    cachedResult = yield this.get(key);
                    Logger_1.Logger.info("Object already in cache.");
                    if (!cachedResult) {
                        Logger_1.Logger.info("Storing object in cache...");
                        yield this.redisClient.set("a", JSON.stringify(data));
                        yield this.redisClient.expire("a", expireInSeconds);
                        Logger_1.Logger.info("Object cached.");
                    }
                }
                catch (ex) {
                    Logger_1.Logger.error("Error setting the cache:", ex);
                }
            }
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.redisClient) {
                try {
                    return yield this.redisClient.get("a");
                }
                catch (ex) {
                    Logger_1.Logger.error("Error retrieving from the cache:", ex);
                }
            }
            return null;
        });
    }
}
exports.RedisService = RedisService;
//# sourceMappingURL=RedisService.js.map