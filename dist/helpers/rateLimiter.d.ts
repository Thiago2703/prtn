export declare function wait(milliseconds: number): Promise<unknown>;
export declare class RateLimiter {
    lastRequestTime: number;
    wait(): Promise<boolean>;
}
