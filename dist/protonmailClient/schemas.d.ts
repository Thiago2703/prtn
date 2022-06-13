import * as t from "io-ts";
export declare const expectToValidate: <A>(v: t.Validation<A>) => void;
export declare const BaseAPIResponse: t.TypeC<{
    Code: t.NumberC;
}>;
