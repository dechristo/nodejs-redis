import express from "express";
import { FlightController } from "./controllers/FlightController";

const router = express.Router();
const flightController = new FlightController();

router.get("/", flightController.getFlightSchedules.bind(flightController));

export  { router };
