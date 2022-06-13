import { IBaseAPIResponse } from "../types";
export interface IAddressResponse extends IBaseAPIResponse {
    Addresses: IAddressObject[];
}
export interface IUserResponse extends IBaseAPIResponse {
    User: IUserObject;
}
export interface IAddressObject {
    ID: string;
    DomainID: string;
    Email: string;
    Status: number;
    Type: number;
    Receive: number;
    Send: number;
    DisplayName: string;
    Signature: string;
    Order: number;
    Priority: number;
    HasKeys: number;
    SignedKeyList?: any;
    Keys: IAddressKeyObject[];
}
export interface IUserObject {
    Credit: number;
    Currency: string;
    Delinquent: number;
    DisplayName: string;
    Email: string;
    ID: string;
    DomainID: string;
    Keys: IUserKeyObject[];
    MaxSpace: number;
    MaxUpload: number;
    MnemonicStatus: number;
    Name: string;
    Private: number;
    Role: number;
    Services: number;
    Subscribed: number;
    ToMigrate: number;
    Type: number;
    UsedSpace: number;
}
export interface IUserKeyObject {
    Active: number;
    Fingerprint: string;
    ID: string;
    Primary: number;
    PrivateKey: string;
    RecoverySecret?: any;
    RecoverySecretSignature?: any;
    Version: number;
}
export interface IAddressKeyObject {
    ID: string;
    Primary: number;
    Flags: number;
    Fingerprint: string;
    Fingerprints: string[];
    PublicKey: string;
    Active: number;
    Version: number;
    Activation?: any;
    PrivateKey: string;
    Token?: any;
    Signature?: any;
}
export interface IKeySaltsResponse extends IBaseAPIResponse {
    KeySalts: IKeySalt[];
}
export interface IKeySalt {
    ID: string;
    KeySalt: string;
}
export interface IPasswordInformation {
    password: string;
}
