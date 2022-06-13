import { ProtonmailClient } from "../index";
import { IEventsGetResponse } from "./types";
export declare class EventsRoutes {
    private client;
    constructor(client: ProtonmailClient);
    latest(): Promise<IEventsGetResponse>;
    get(id: string): Promise<IEventsGetResponse>;
}
