/// <reference types="node" />
/**
 * Extract modulus without verification
 * @param {String} modulus - Armored modulus string
 * @returns {Promise<Uint8Array>}
 */
export declare const getModulusWithoutVerification: (modulus: string) => Promise<Buffer>;
