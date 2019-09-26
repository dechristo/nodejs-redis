"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FlightController_1 = require("./controllers/FlightController");
const router = express_1.default.Router();
exports.router = router;
const flightController = new FlightController_1.FlightController();
router.get("/", flightController.getFlightSchedules.bind(flightController));
//# sourceMappingURL=router.js.map