export interface IFlightService {
    getFlightSchedules(date: string): Promise<any>;
}
