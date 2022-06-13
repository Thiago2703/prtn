import { ProtonmailClient } from "../index";
import { IUsersResponse } from "./types";
export declare class UsersRoutes {
    private client;
    constructor(client: ProtonmailClient);
    me(): Promise<IUsersResponse>;
}
