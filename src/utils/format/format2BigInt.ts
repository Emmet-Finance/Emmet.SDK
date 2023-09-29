import { isHexString } from "../verifiers";
import { hexToDecimalString } from "./hexToDecimalString";

/**
 * Converts two values to BigInt and returns them as properties within an object.
 *
 * @param {string | number | bigint} a The first value to be converted to a BigInt.
 * @param {string | number | bigint} b The second value to be converted to a BigInt.
 * @returns {Object} An object containing the converted BigInt values as `_a` and `_b` properties.
 *
 * @example
 * ```ts
 * const stringValue1 = "12345";
 * const numberValue1 = 42;
 * const bigintValue1 = 100n;
 *
 * const stringValue2 = "98765";
 * const numberValue2 = 99;
 * const bigintValue2 = 200n;
 *
 * const result = format2BigInt(stringValue1, stringValue2);
 * // Result: { _a: 12345n, _b: 98765n }
 * ```
 */
export function format2BigInt(
    a: string | number | bigint,
    b: string | number | bigint
): { _a: bigint, _b: bigint } {
    let _a, _b;
    if (a && typeof a === 'string') {
        if (isHexString(a)){
            _a = hexToDecimalString(a)
        }else{
            _a = a.replace(/[^0-9]/g, '')
        }
    }
    else { _a = a }
    if (b && typeof b === 'string') { 
        if(isHexString(b)){
            _b = hexToDecimalString(b)
        }else{
            _b = b.replace(/[^0-9]/g, '')
        }
         
    }
    else { _b = b }
    return { _a: _a ? BigInt(_a) : 0n, _b: _b ? BigInt(_b) : 0n }
}