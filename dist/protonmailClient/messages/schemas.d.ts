import * as t from "io-ts";
export declare const Sender: t.TypeC<{
    Address: t.StringC;
    Name: t.StringC;
}>;
export declare const Recipient: t.TypeC<{
    Name: t.StringC;
    Address: t.StringC;
}>;
export declare const MessageMetadata: t.TypeC<{
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
export declare const MessagesListResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    Total: t.NumberC;
    Limit: t.NumberC;
    Messages: t.ArrayC<t.TypeC<{
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
    }>>;
}>]>;
export declare const Attachment: t.TypeC<{
    ID: t.StringC;
    Name: t.StringC;
    Size: t.NumberC;
    MIMEType: t.StringC;
    KeyPackets: t.StringC;
    Headers: t.RecordC<t.StringC, t.UnionC<[t.StringC, t.ArrayC<t.StringC>]>>;
    Signature: t.StringC;
}>;
export declare const Message: t.IntersectionC<[t.TypeC<{
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
}>, t.TypeC<{
    Body: t.StringC;
    MIMEType: t.StringC;
    Header: t.StringC;
    ParsedHeaders: t.RecordC<t.StringC, t.UnionC<[t.StringC, t.ArrayC<t.StringC>]>>;
    ReplyTo: t.TypeC<{
        Name: t.StringC;
        Address: t.StringC;
    }>;
    ReplyTos: t.ArrayC<t.TypeC<{
        Name: t.StringC;
        Address: t.StringC;
    }>>;
    Attachments: t.ArrayC<t.TypeC<{
        ID: t.StringC;
        Name: t.StringC;
        Size: t.NumberC;
        MIMEType: t.StringC;
        KeyPackets: t.StringC;
        Headers: t.RecordC<t.StringC, t.UnionC<[t.StringC, t.ArrayC<t.StringC>]>>;
        Signature: t.StringC;
    }>>;
}>]>;
export declare const MessagesGetResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    Message: t.IntersectionC<[t.TypeC<{
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
    }>, t.TypeC<{
        Body: t.StringC;
        MIMEType: t.StringC;
        Header: t.StringC;
        ParsedHeaders: t.RecordC<t.StringC, t.UnionC<[t.StringC, t.ArrayC<t.StringC>]>>;
        ReplyTo: t.TypeC<{
            Name: t.StringC;
            Address: t.StringC;
        }>;
        ReplyTos: t.ArrayC<t.TypeC<{
            Name: t.StringC;
            Address: t.StringC;
        }>>;
        Attachments: t.ArrayC<t.TypeC<{
            ID: t.StringC;
            Name: t.StringC;
            Size: t.NumberC;
            MIMEType: t.StringC;
            KeyPackets: t.StringC;
            Headers: t.RecordC<t.StringC, t.UnionC<[t.StringC, t.ArrayC<t.StringC>]>>;
            Signature: t.StringC;
        }>>;
    }>]>;
}>]>;
export declare const MessagesCountItem: t.TypeC<{
    LabelID: t.UnionC<[t.NumberC, t.StringC]>;
    Total: t.NumberC;
    Unread: t.NumberC;
}>;
export declare const MessagesCountResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    Counts: t.ArrayC<t.TypeC<{
        LabelID: t.UnionC<[t.NumberC, t.StringC]>;
        Total: t.NumberC;
        Unread: t.NumberC;
    }>>;
}>]>;
export declare const FlagMessageResponseItem: t.TypeC<{
    ID: t.StringC;
    Response: t.TypeC<{
        Code: t.NumberC;
    }>;
}>;
export declare const FlagMessageResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    Responses: t.ArrayC<t.TypeC<{
        ID: t.StringC;
        Response: t.TypeC<{
            Code: t.NumberC;
        }>;
    }>>;
}>]>;
