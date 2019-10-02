import { FlightService } from "./../services/FlightService";
import { Logger } from "./../utils/Logger";
import { Request, Response } from "express";

export class FlightController {

    private readonly apiKey = "r8yd4a5y5fqa4xgk39m6mhxw";
    private flightService: FlightService;

    constructor() {
        this.flightService = new FlightService();
    }
    public async getFlightSchedules(req: Request, res: Response): Promise<any> {
      const response = await this.flightService.getFlightSchedules("2019-10-02");
      res.json(response);
    }
}
