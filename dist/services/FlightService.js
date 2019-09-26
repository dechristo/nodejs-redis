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
const LRUCacheService_1 = require("./LRUCacheService");
const request = require("request-promise");
class FlightService {
    constructor() {
        this.cacheService = new LRUCacheService_1.LRUCacheService();
    }
    getFlightSchedules() {
        return __awaiter(this, void 0, void 0, function* () {
            let cachedResult;
            try {
                cachedResult = yield this.cacheService.get("a");
            }
            catch (ex) {
                Logger_1.Logger.error("Error retrieving from cache.", ex);
            }
            if (cachedResult) {
                Logger_1.Logger.info("Retrieved from cache");
                return JSON.parse(cachedResult);
            }
            let result;
            const options = {
                url: "api.lufthansa.com/v1/operations/schedules/TXL/JFK/2019-09-20",
                headers: {
                    Authorization: "Bearer 4sbx9jvhbtjtnaawypsrpcm4",
                    Accept: "application/json"
                }
            };
            result = yield request.get("http://dev.gerstenhoeferj.partner.vxcp.de/service/offerItems_0101/?phonePrefix=&maxResultsPerPage=0&pageNumber=1&sortBy=&sortDirection=&postCode=&cityName=&streetName=&houseNumber=&contractDuration=24&customerType=existingCustomer&includeCashbackCampaigns=notSet&minSpeed=16000&onlyProductsForBusinessCustomers=false&onlyProductsForStudents=false&onlyProductsWithFreeHardware=false&onlyProductsWithTvOptions=false&overrideCableCosts=false&remainingContractDuration=0&telephonyFlatIncluded=flatrate&onlyProductsWithoutTrafficLimitation=true&onlyProductsWithWlanHardware=false&partnerId=1&purpose=calculator&productType=broadband&outputFormat=json");
            yield this.cacheService.add("a", JSON.stringify(result), 10);
            return result;
        });
    }
}
exports.FlightService = FlightService;
//# sourceMappingURL=FlightService.js.map