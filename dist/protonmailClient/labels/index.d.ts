import { ProtonmailClient } from "../index";
import { ILabelsListArgs, ILabelsListResponse } from "./types";
export declare class LabelsRoutes {
    private client;
    constructor(client: ProtonmailClient);
    list(args: ILabelsListArgs): Promise<ILabelsListResponse>;
}
