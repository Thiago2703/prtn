import * as t from "io-ts";
export declare const Label: t.TypeC<{
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
export declare const LabelsListResponse: t.IntersectionC<[t.TypeC<{
    Code: t.NumberC;
}>, t.TypeC<{
    Labels: t.ArrayC<t.TypeC<{
        ID: t.StringC;
        Name: t.StringC;
        Color: t.StringC;
        Order: t.NumberC;
        Notify: t.NumberC;
        Path: t.StringC;
        Type: t.NumberC;
        Display: t.NumberC;
        Exclusive: t.NumberC;
    }>>;
}>]>;
