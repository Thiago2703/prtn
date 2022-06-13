import { ProtonmailClient } from "../index";
import { IAddressResponse, IKeySaltsResponse, IUserObject, IUserResponse } from "./types";

export class KeysRoutes {
    private client: ProtonmailClient;

    constructor(client: ProtonmailClient) {
        this.client = client;
    }

    public async address() {
        const response = await this.client.request<IAddressResponse>({
            method: "get",
            url: "addresses",
        });
        return response.data;
    }

    public async users() {
        const response = await this.client.request<IUserResponse>({
            method: "get",
            url: "users",
        });
        return response.data;
    }

    public async keySalts() {
        const response = await this.client.request<IKeySaltsResponse>({
            method: "get",
            url: "keys/salts",
        });
        return response.data;
    }
}

