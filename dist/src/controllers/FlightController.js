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
const request = require("request-promise");
class FlightController {
    constructor() {
        this.apiKey = 'r8yd4a5y5fqa4xgk39m6mhxw';
    }
    getFlightSchedules(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('mah oiiiiiiiiiii');
            let result;
            const options = {
                url: "api.lufthansa.com/v1/operations/schedules/TXL/JFK/2019-09-20",
                headers: {
                    Authorization: "Bearer 4sbx9jvhbtjtnaawypsrpcm4",
                    Accept: "application/json"
                }
            };
            result = yield request.get("http://dev.gerstenhoeferj.partner.vxcp.de/service/offerItems_0101/?phonePrefix=&maxResultsPerPage=0&pageNumber=1&sortBy=&sortDirection=&postCode=&cityName=&streetName=&houseNumber=&contractDuration=24&customerType=existingCustomer&includeCashbackCampaigns=notSet&minSpeed=16000&onlyProductsForBusinessCustomers=false&onlyProductsForStudents=false&onlyProductsWithFreeHardware=false&onlyProductsWithTvOptions=false&overrideCableCosts=false&remainingContractDuration=0&telephonyFlatIncluded=flatrate&onlyProductsWithoutTrafficLimitation=true&onlyProductsWithWlanHardware=false&partnerId=1&purpose=calculator&productType=broadband&outputFormat=json");
            res.json(result);
        });
    }
}
exports.FlightController = FlightController;
//# sourceMappingURL=FlightController.js.map