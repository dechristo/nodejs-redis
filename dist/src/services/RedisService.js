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
const asyncRedis = require("async-redis");
class RedisService {
    constructor() {
        this.redisClient = asyncRedis.createClient(6379);
        this.redisClient.on("error", (err) => {
            console.log("error --------->", err);
        });
        this.redisClient.on("ready", (err) => {
            console.log("Good to go!", err);
        });
    }
    add(key, data, expireInSeconds) {
        // if (redisClient) {
        //     try {
        //         cached = await redisClient.get("a");
        //         if (cached) {
        //             console.log("--> Result fetched from cache.");
        //             res.json(JSON.parse(cached));
        //             return;
        //         }
        //     } catch (ex) {
        //         console.log("ERROR retrieving from the cache:", ex);
        //     }
        //     const options = {
        //         url: "api.lufthansa.com/v1/operations/schedules/TXL/JFK/2019-09-20",
        //         headers: {
        //             Authorization: "Bearer k9ccs8f33z63839urycsh2k9",
        //             Accept: "application/json"
        //         }
        //     }
        // }
        // result = await request.get("http://dev.gerstenhoeferj.partner.vxcp.de/service/offerItems_0101/?phonePrefix=&maxResultsPerPage=0&pageNumber=1&sortBy=&sortDirection=&postCode=&cityName=&streetName=&houseNumber=&contractDuration=24&customerType=existingCustomer&includeCashbackCampaigns=notSet&minSpeed=16000&onlyProductsForBusinessCustomers=false&onlyProductsForStudents=false&onlyProductsWithFreeHardware=false&onlyProductsWithTvOptions=false&overrideCableCosts=false&remainingContractDuration=0&telephonyFlatIncluded=flatrate&onlyProductsWithoutTrafficLimitation=true&onlyProductsWithWlanHardware=false&partnerId=1&purpose=calculator&productType=broadband&outputFormat=json");
        // if (redisClient) {
        //     try {
        //     console.log("setting the cache...");
        //     await redisClient.set("a", JSON.stringify(result));
        //     redisClient.expire("a", 15);
        //     console.log("response cached.");
        //     } catch (ex) {
        //         console.log("ERROR setting the cache:", ex);
        //     }
        // }
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.RedisService = RedisService;
//# sourceMappingURL=RedisService.js.map