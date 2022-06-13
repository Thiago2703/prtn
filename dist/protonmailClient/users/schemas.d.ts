import * as t from "io-ts";
export declare const Key: t.TypeC<{
    ID: t.StringC;
    Version: t.NumberC;
    Primary: t.NumberC;
    PrivateKey: t.StringC;
    Fingerprint: t.StringC;
}>;
export declare const ProtonUser: t.TypeC<{
    ID: t.StringC;
    Name: t.StringC;
    UsedSpace: t.NumberC;
    Currency: t.StringC;
    Credit: t.NumberC;
    DisplayName: t.StringC;
    MaxSpace: t.NumberC;
    MaxUpload: t.NumberC;
    Subscribed: t.NumberC;
    Services: t.NumberC;
    Role: t.NumberC;
    Private: t.NumberC;
    Delinquent: t.NumberC;
    Keys: t.ArrayC<t.TypeC<{
        ID: t.StringC;
        Version: t.NumberC;
        Primary: t.NumberC;
        PrivateKey: t.StringC;
        Fingerprint: t.StringC;
    }>>;
}>;
export declare const UsersResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    User: t.TypeC<{
        ID: t.StringC;
        Name: t.StringC;
        UsedSpace: t.NumberC;
        Currency: t.StringC;
        Credit: t.NumberC;
        DisplayName: t.StringC;
        MaxSpace: t.NumberC;
        MaxUpload: t.NumberC;
        Subscribed: t.NumberC;
        Services: t.NumberC;
        Role: t.NumberC;
        Private: t.NumberC;
        Delinquent: t.NumberC;
        Keys: t.ArrayC<t.TypeC<{
            ID: t.StringC;
            Version: t.NumberC;
            Primary: t.NumberC;
            PrivateKey: t.StringC;
            Fingerprint: t.StringC;
        }>>;
    }>;
}>]>;
