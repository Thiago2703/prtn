/// <reference types="node" />
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ILoginInformation, IAuthRefreshResponse, ITokenLoginInformation } from "./auth/types";
import { IPasswordInformation } from "./keys/types";
import { UsersRoutes } from "./users/index";
import { LabelsRoutes } from "./labels/index";
import { MessagesRoutes } from "./messages/index";
import { EventEmitter } from "events";
import { EventsRoutes } from "./events";
import { KeysRoutes } from "./keys";
import { IMessage } from "./messages/types";
export interface IProtonmailClientOptions {
    domain: string;
    rateLimit: boolean;
    userAgent: string;
}
export interface IProtonmailKeys {
    publicKey: string;
    privateKey: string;
    passphrase: string;
}
export declare interface IProtonmailClient {
    on(event: "logout", listener: () => void): this;
    on(event: string, listener: Function): this;
}
export declare class ProtonmailClient extends EventEmitter {
    private axios;
    private isloggedIn_;
    private refreshingToken_;
    private accessToken_;
    private refreshToken_;
    private pmUID_;
    private keysInfo_;
    private rateLimiter;
    private options;
    private get pmUID();
    private set pmUID(value);
    private get accessToken();
    private set accessToken(value);
    private get refreshToken();
    private set refreshToken(value);
    private users_;
    get users(): UsersRoutes;
    private keys_;
    get keys(): KeysRoutes;
    private labels_;
    get labels(): LabelsRoutes;
    private messages_;
    get messages(): MessagesRoutes;
    private events_;
    get events(): EventsRoutes;
    get isLoggedIn(): boolean;
    constructor(options?: Partial<IProtonmailClientOptions>);
    private createAxiosInstance;
    request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    loginWithToken(loginInformation: ITokenLoginInformation): Promise<IAuthRefreshResponse>;
    fetchKeys(passwordInformation: IPasswordInformation): Promise<void>;
    decryptMessage(armoredMessage: IMessage): Promise<import("openpgp").MaybeStream<import("openpgp").Data> & string>;
    getTokenLoginInformation(): ITokenLoginInformation;
    login(loginInformation: ILoginInformation): Promise<void>;
    logout(): Promise<{}>;
    private authInfo;
    private auth;
    private auth2FA;
    private authRefresh;
}
