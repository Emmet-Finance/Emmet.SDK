/**
 * Converts a value to a BigInt, handling various input types.
 *
 * @param x The value to be converted to a BigInt.
 * @returns The resulting BigInt value.
 *
 * @example
 * ```ts
 * const stringValue = "12345";
 * const numberValue = 42;
 * const bigintValue = 100n;
 *
 * const result1 = toBigInt(stringValue); // Result: 12345n
 * const result2 = toBigInt(numberValue); // Result: 42n
 * const result3 = toBigInt(bigintValue);  // Result: 100n
 * ```
 */
export function toBigInt(x: string | number | bigint): bigint {
    // Handle null or undefined values by returning 0n
    if (!x) return 0n;

    // Normalize input by removing non-numeric characters if it's a string
    let internal: string | number | bigint = typeof x === 'string'
        ? x.replace(/[^0-9]/g, '')
        : x;

    // Convert the normalized value to a BigInt
    return BigInt(internal);
}