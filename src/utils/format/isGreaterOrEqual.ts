import { format2BigInt } from "./format2BigInt";

/**
 * Checks if one value is greater than or equal to another value.
 *
 * @param {string | number | bigint} a The first value.
 * @param {string | number | bigint} b The second value.
 * @returns {boolean} True if the first value is greater than or equal to the second value, false otherwise.
 *
 * @example
 * ```ts
 * const value1 = "12345";
 * const value2 = "98765";
 *
 * const result = isGreaterOrEqual(value1, value2);
 * // Result: false
 * ```
 */
export const isGreaterOrEqual = (
    a: string | number | bigint,
    b: string | number | bigint
): boolean => {
    // Convert the input values to BigInt using format2BigInt
    const { _a, _b } = format2BigInt(a, b);

    // Compare the values using BigInt and return the result as a boolean
    return BigInt(_a) >= BigInt(_b);
}