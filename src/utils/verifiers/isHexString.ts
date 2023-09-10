/**
 * Check if a given string is a valid hexadecimal string with or without the '0x' prefix.
 * @param s The string to check.
 * @returns True if the string is a valid hexadecimal string, false otherwise.
 * 
 * @example
 * ```ts
 * console.log(isHexString("0x89f8e091e5e80d5")); // true
 * console.log(isHexString("89f8e091e5e80d5"));  // true
 * console.log(isHexString("123XYZ"));           // false
 * ```
 */
export function isHexString(s: any): boolean {
    // Check if the input is a string
    if (!s || typeof s !== 'string') return false;

    // Define a regular expression pattern for a hexadecimal string
    const hexadecimalRegex = /^0x[0-9A-Fa-f]+$/g;

    // Test if the string matches the pattern
    return hexadecimalRegex.test(s);
}