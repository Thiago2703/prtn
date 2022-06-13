/**
 * Compute the key password.
 * @param {String} password plaintext password
 * @param {String} salt base 64 encoded string
 * @returns {Promise<String>}
 */
export declare const computeKeyPassword: (password: string, salt: string) => Promise<string>;
/**
 * Generate salt for a key.
 * @returns {String}
 */
export declare const generateKeySalt: () => string;
