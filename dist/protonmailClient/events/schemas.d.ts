import * as t from "io-ts";
export declare const EventsMessageCountLocationItem: t.TypeC<{
    Location: t.NumberC;
    Count: t.NumberC;
}>;
export declare const EventsMessageCountLabelItem: t.TypeC<{
    LabelID: t.StringC;
    Count: t.NumberC;
}>;
export declare const EventsMessageCount: t.TypeC<{
    Locations: t.ArrayC<t.TypeC<{
        Location: t.NumberC;
        Count: t.NumberC;
    }>>;
    Labels: t.ArrayC<t.TypeC<{
        LabelID: t.StringC;
        Count: t.NumberC;
    }>>;
    Starred: t.NumberC;
}>;
export declare const EventsMessage: t.TypeC<{
    ID: t.StringC;
    Action: t.NumberC;
    Message: t.TypeC<{
        ID: t.StringC;
        Order: t.NumberC;
        ConversationID: t.StringC;
        Subject: t.StringC;
        Unread: t.NumberC;
        SenderAddress: t.StringC;
        SenderName: t.StringC;
        Sender: t.TypeC<{
            Address: t.StringC;
            Name: t.StringC;
        }>;
        Flags: t.NumberC;
        Type: t.NumberC;
        IsEncrypted: t.NumberC;
        IsReplied: t.NumberC;
        IsRepliedAll: t.NumberC;
        IsForwarded: t.NumberC;
        ToList: t.ArrayC<t.TypeC<{
            Name: t.StringC;
            Address: t.StringC;
        }>>;
        CCList: t.ArrayC<t.TypeC<{
            Name: t.StringC;
            Address: t.StringC;
        }>>;
        BCCList: t.ArrayC<t.TypeC<{
            Name: t.StringC;
            Address: t.StringC;
        }>>;
        Time: t.NumberC;
        Size: t.NumberC;
        NumAttachments: t.NumberC;
        ExpirationTime: t.NumberC;
        AddressID: t.StringC;
        ExternalID: t.UnionC<[t.StringC, t.NullC]>;
        LabelIDs: t.ArrayC<t.UnionC<[t.NumberC, t.StringC]>>;
    }>;
}>;
export declare const EventsLabel: t.TypeC<{
    ID: t.StringC;
    Action: t.NumberC;
    Label: t.TypeC<{
        ID: t.StringC;
        Name: t.StringC;
        Color: t.StringC;
        Order: t.NumberC;
        Notify: t.NumberC;
        Path: t.StringC;
        Type: t.NumberC;
        Display: t.NumberC;
        Exclusive: t.NumberC;
    }>;
}>;
export declare const EventsGetResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    EventID: t.StringC;
    Refresh: t.UnionC<[t.NumberC, t.UndefinedC]>;
    More: t.UnionC<[t.NumberC, t.UndefinedC]>;
    Messages: t.UnionC<[t.ArrayC<t.TypeC<{
        ID: t.StringC;
        Action: t.NumberC;
        Message: t.TypeC<{
            ID: t.StringC;
            Order: t.NumberC;
            ConversationID: t.StringC;
            Subject: t.StringC;
            Unread: t.NumberC;
            SenderAddress: t.StringC;
            SenderName: t.StringC;
            Sender: t.TypeC<{
                Address: t.StringC;
                Name: t.StringC;
            }>;
            Flags: t.NumberC;
            Type: t.NumberC;
            IsEncrypted: t.NumberC;
            IsReplied: t.NumberC;
            IsRepliedAll: t.NumberC;
            IsForwarded: t.NumberC;
            ToList: t.ArrayC<t.TypeC<{
                Name: t.StringC;
                Address: t.StringC;
            }>>;
            CCList: t.ArrayC<t.TypeC<{
                Name: t.StringC;
                Address: t.StringC;
            }>>;
            BCCList: t.ArrayC<t.TypeC<{
                Name: t.StringC;
                Address: t.StringC;
            }>>;
            Time: t.NumberC;
            Size: t.NumberC;
            NumAttachments: t.NumberC;
            ExpirationTime: t.NumberC;
            AddressID: t.StringC;
            ExternalID: t.UnionC<[t.StringC, t.NullC]>;
            LabelIDs: t.ArrayC<t.UnionC<[t.NumberC, t.StringC]>>;
        }>;
    }>>, t.UndefinedC]>;
    Labels: t.UnionC<[t.ArrayC<t.TypeC<{
        ID: t.StringC;
        Action: t.NumberC;
        Label: t.TypeC<{
            ID: t.StringC;
            Name: t.StringC;
            Color: t.StringC;
            Order: t.NumberC;
            Notify: t.NumberC;
            Path: t.StringC;
            Type: t.NumberC;
            Display: t.NumberC;
            Exclusive: t.NumberC;
        }>;
    }>>, t.UndefinedC]>;
    Conversations: t.UnionC<[t.ArrayC<t.TypeC<{
        ID: t.StringC;
        Action: t.NumberC;
        Message: t.TypeC<{
            ID: t.StringC;
            Order: t.NumberC;
            ConversationID: t.StringC;
            Subject: t.StringC;
            Unread: t.NumberC;
            SenderAddress: t.StringC;
            SenderName: t.StringC;
            Sender: t.TypeC<{
                Address: t.StringC;
                Name: t.StringC;
            }>;
            Flags: t.NumberC;
            Type: t.NumberC;
            IsEncrypted: t.NumberC;
            IsReplied: t.NumberC;
            IsRepliedAll: t.NumberC;
            IsForwarded: t.NumberC;
            ToList: t.ArrayC<t.TypeC<{
                Name: t.StringC;
                Address: t.StringC;
            }>>;
            CCList: t.ArrayC<t.TypeC<{
                Name: t.StringC;
                Address: t.StringC;
            }>>;
            BCCList: t.ArrayC<t.TypeC<{
                Name: t.StringC;
                Address: t.StringC;
            }>>;
            Time: t.NumberC;
            Size: t.NumberC;
            NumAttachments: t.NumberC;
            ExpirationTime: t.NumberC;
            AddressID: t.StringC;
            ExternalID: t.UnionC<[t.StringC, t.NullC]>;
            LabelIDs: t.ArrayC<t.UnionC<[t.NumberC, t.StringC]>>;
        }>;
    }>>, t.UndefinedC]>;
    Total: t.UnionC<[t.TypeC<{
        Locations: t.ArrayC<t.TypeC<{
            Location: t.NumberC;
            Count: t.NumberC;
        }>>;
        Labels: t.ArrayC<t.TypeC<{
            LabelID: t.StringC;
            Count: t.NumberC;
        }>>;
        Starred: t.NumberC;
    }>, t.UndefinedC]>;
    Unread: t.UnionC<[t.TypeC<{
        Locations: t.ArrayC<t.TypeC<{
            Location: t.NumberC;
            Count: t.NumberC;
        }>>;
        Labels: t.ArrayC<t.TypeC<{
            LabelID: t.StringC;
            Count: t.NumberC;
        }>>;
        Starred: t.NumberC;
    }>, t.UndefinedC]>;
}>]>;
