import * as t from "io-ts";
export declare const AddressKeyObject: t.TypeC<{
    ID: t.StringC;
    Primary: t.NumberC;
    Flags: t.NumberC;
    Fingerprint: t.StringC;
    Fingerprints: t.ArrayC<t.StringC>;
    PublicKey: t.StringC;
    Active: t.NumberC;
    Version: t.NumberC;
    Activation: t.UnknownC;
    PrivateKey: t.StringC;
    Token: t.UnknownC;
    Signature: t.UnknownC;
}>;
export declare const AddressObject: t.TypeC<{
    ID: t.StringC;
    DomainID: t.StringC;
    Email: t.StringC;
    Status: t.NumberC;
    Type: t.NumberC;
    Receive: t.NumberC;
    Send: t.NumberC;
    DisplayName: t.StringC;
    Signature: t.StringC;
    Order: t.NumberC;
    Priority: t.NumberC;
    HasKeys: t.NumberC;
    SignedKeyList: t.UnknownC;
    Keys: t.ArrayC<t.TypeC<{
        ID: t.StringC;
        Primary: t.NumberC;
        Flags: t.NumberC;
        Fingerprint: t.StringC;
        Fingerprints: t.ArrayC<t.StringC>;
        PublicKey: t.StringC;
        Active: t.NumberC;
        Version: t.NumberC;
        Activation: t.UnknownC;
        PrivateKey: t.StringC;
        Token: t.UnknownC;
        Signature: t.UnknownC;
    }>>;
}>;
export declare const AddressResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    Addresses: t.ArrayC<t.TypeC<{
        ID: t.StringC;
        DomainID: t.StringC;
        Email: t.StringC;
        Status: t.NumberC;
        Type: t.NumberC;
        Receive: t.NumberC;
        Send: t.NumberC;
        DisplayName: t.StringC;
        Signature: t.StringC;
        Order: t.NumberC;
        Priority: t.NumberC;
        HasKeys: t.NumberC;
        SignedKeyList: t.UnknownC;
        Keys: t.ArrayC<t.TypeC<{
            ID: t.StringC;
            Primary: t.NumberC;
            Flags: t.NumberC;
            Fingerprint: t.StringC;
            Fingerprints: t.ArrayC<t.StringC>;
            PublicKey: t.StringC;
            Active: t.NumberC;
            Version: t.NumberC;
            Activation: t.UnknownC;
            PrivateKey: t.StringC;
            Token: t.UnknownC;
            Signature: t.UnknownC;
        }>>;
    }>>;
}>]>;
export declare const KeySalt: t.TypeC<{
    ID: t.StringC;
    KeySalt: t.StringC;
}>;
export declare const KeySaltsResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    KeySalts: t.ArrayC<t.TypeC<{
        ID: t.StringC;
        KeySalt: t.StringC;
    }>>;
}>]>;
