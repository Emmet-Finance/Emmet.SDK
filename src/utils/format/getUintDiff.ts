import { format2BigInt } from "./format2BigInt";

/**
 * Calculates the difference between two values as BigInt and returns the result.
 * If either of the values is falsy, the result is 0n.
 *
 * @param a The first value.
 * @param b The second value.
 * @returns The difference between the two values as a BigInt.
 *
 * @example
 * ```ts
 * const value1 = "12345";
 * const value2 = "98765";
 *
 * const result = getUintDiff(value1, value2);
 * // Result: 86420n
 * ```
 */
export const getUintDiff = (
    a: string | number | bigint,
    b: string | number | bigint
): bigint => {
    // Convert the input values to BigInt using format2BigInt
    const { _a, _b } = format2BigInt(a, b);

    // Check if both values are truthy; if so, calculate the difference
    if (a && b) {
        return _a - _b;
    }

    // If either value is falsy, return 0n
    return 0n;
}