import { Logger } from "../utils/Logger";
import { RedisService } from "./../services/RedisService";
import { IFlightService } from "./IFlightService";
import { NodeCacheService } from "./NodeCacheService";

const request = require("request-promise");

export class FlightService implements IFlightService {
    private cacheService: ICacheService;
    private readonly FLIGHT_SCHEDULE_URL = "api.lufthansa.com/v1/operations/schedules/TXL/JFK/";
    constructor() {
        this.cacheService = new NodeCacheService();
    }

    public async getFlightSchedules(date: string): Promise<any> {
        let cachedResult: any;

        try {
            cachedResult = await this.cacheService.get(this.FLIGHT_SCHEDULE_URL + date);
        } catch (ex) {
          Logger.error("Error retrieving from cache.", ex);
        }

        if (cachedResult) {
            Logger.info("Retrieved from cache");
            return JSON.parse(cachedResult);
        }

        let result: {};
        const options = {
            url: this.FLIGHT_SCHEDULE_URL + date,
            headers: {
                Authorization: "Bearer 4sbx9jvhbtjtnaawypsrpcm4",
                Accept: "application/json"
            }
        };

        result = await request.get(options);
        await this.cacheService.add(this.FLIGHT_SCHEDULE_URL + date, JSON.stringify(result), 10);
        return result;
    }
}
