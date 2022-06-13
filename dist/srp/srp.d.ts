/// <reference types="node" />
/**
 * @param {Buffer} arr
 * @return {Promise<Buffer>}
 */
export declare const srpHasher: (arr: Buffer) => Promise<Buffer>;
/**
 * @param {Object} params
 * @param {Number} params.len - Size of the proof (bytes length)
 * @param {Buffer} params.modulusArray
 * @param {Buffer} params.hashedPasswordArray
 * @param {Buffer} params.serverEphemeralArray
 * @return {Promise}
 */
export declare const generateProofs: ({ len, modulusArray, hashedPasswordArray, serverEphemeralArray }: {
    len: number;
    modulusArray: Buffer;
    hashedPasswordArray: Buffer;
    serverEphemeralArray: Buffer;
}) => Promise<{
    clientEphemeral: Buffer;
    clientProof: Buffer;
    expectedServerProof: Buffer;
    sharedSession: Buffer;
}>;
/**
 * @param {Object} data - Auth info from the API
 * @param {String} data.Modulus - Base 64 encoded server modulus as a pgp signed message
 * @param {Number} data.Version - The auth version
 * @param {String} data.ServerEphemeral - Base64 encoded server ephemeral
 * @param {String} [data.Username] - The user name
 * @param {String} [data.Salt] - Base64 encoded salt
 * @param {Object} credentials - Credentials entered by the user
 * @param {String} [credentials.username] - Username entered
 * @param {String} credentials.password - Password entered
 * @param {Number} [authVersion] - The auth version
 * @return {Promise}
 */
export declare const getSrp: ({ Version, Modulus: serverModulus, ServerEphemeral, Username, Salt }: {
    Version: number;
    Modulus: string;
    ServerEphemeral: string;
    Username: string;
    Salt: string;
}, { password }: {
    password: string;
}, authVersion?: number) => Promise<{
    clientEphemeral: string;
    clientProof: string;
    expectedServerProof: string;
    sharedSession: Buffer;
}>;
