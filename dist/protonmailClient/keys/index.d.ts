import { ProtonmailClient } from "../index";
import { IAddressResponse, IKeySaltsResponse, IUserResponse } from "./types";
export declare class KeysRoutes {
    private client;
    constructor(client: ProtonmailClient);
    address(): Promise<IAddressResponse>;
    users(): Promise<IUserResponse>;
    keySalts(): Promise<IKeySaltsResponse>;
}
