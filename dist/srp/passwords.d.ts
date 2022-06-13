/// <reference types="node" />
export declare const encodeUtf8: (input: string) => string;
/**
 * Expand a hash
 * @param {Buffer} input
 * @returns {Promise<Buffer>}
 */
export declare const expandHash: (input: Buffer) => Promise<Buffer>;
/**
 * Hash a password.
 * @param {String} password
 * @param {String} salt
 * @param {String} username
 * @param {Buffer} modulus
 * @param {Number} version
 * @returns {Promise<Buffer>}
 */
export declare const hashPassword: ({ password, salt, username, modulus, version }: {
    password: string;
    salt: string | undefined;
    username: string | undefined;
    modulus: Buffer;
    version: number;
}) => Promise<Buffer>;
