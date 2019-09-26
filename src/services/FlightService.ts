import { Logger } from "../utils/Logger";
import { RedisService } from "./../services/RedisService";
import { IFlightService } from "./IFlightService";
import { NodeCacheService } from "./NodeCacheService";

const request = require("request-promise");

export class FlightService implements IFlightService {
    private cacheService: ICacheService;

    constructor() {
        this.cacheService = new NodeCacheService();
    }

    public async getFlightSchedules(): Promise<any> {
        let cachedResult: any;

        try {
            cachedResult = await this.cacheService.get("a");
        } catch (ex) {
          Logger.error("Error retrieving from cache.", ex);
        }

        if (cachedResult) {
            Logger.info("Retrieved from cache");
            return JSON.parse(cachedResult);
        }

        let result: {};
        const options = {
            url: "api.lufthansa.com/v1/operations/schedules/TXL/JFK/2019-09-20",
            headers: {
                Authorization: "Bearer 4sbx9jvhbtjtnaawypsrpcm4",
                Accept: "application/json"
            }
        };

        result = await request.get(options);
        await this.cacheService.add("a", JSON.stringify(result), 10);
        return result;
    }
}
