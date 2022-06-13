/// <reference types="node" />
import BigNumber from "bignumber.js";
/**
 * From Buffer to big number
 * @param {Buffer} arr
 * @return {BigNumber}
 */
export declare const toBN: (arr: Buffer) => BigNumber;
/**
 * From big number to Buffer
 * @param {Number} len
 * @param {BigNumber} bn
 * @return {Buffer}
 */
export declare const fromBN: (len: number, bn: BigNumber) => Buffer;
