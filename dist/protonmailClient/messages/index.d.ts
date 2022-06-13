import { ProtonmailClient } from "../index";
import { IMessageListArgs, IMessagesListResponse, IMessagesGetResponse, IMessagesCountResponse, IMessagesFlagResponse } from "./types";
import { DefaultLabels } from "../labels/types";
export declare class MessagesRoutes {
    private client;
    constructor(client: ProtonmailClient);
    list(args: IMessageListArgs): Promise<IMessagesListResponse>;
    get(id: string): Promise<IMessagesGetResponse>;
    count(): Promise<IMessagesCountResponse>;
    markAsRead(IDs: string[]): Promise<IMessagesFlagResponse>;
    markAsUnread(IDs: string[]): Promise<IMessagesFlagResponse>;
    label(IDs: string[], labelId: DefaultLabels | number | string): Promise<IMessagesFlagResponse>;
    unlabel(IDs: string[], labelId: DefaultLabels | number | string): Promise<IMessagesFlagResponse>;
    delete(IDs: string[]): Promise<IMessagesFlagResponse>;
}
