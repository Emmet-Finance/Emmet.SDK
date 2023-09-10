/**
 * Convert a hexadecimal string to a decimal string.
 * 
 * @param {string} s The hexadecimal string to convert.
 * @returns {string} The decimal representation of the hexadecimal string.
 * 
 * @example
 * ```js
 * const hexadecimalString = "0x89f8e091e5e80d5";
 * const decimalString = hexToDecimalString(hexadecimalString);
 * console.log(`Hexadecimal: ${hexadecimalString}`);
 * console.log(`Decimal: ${decimalString}`);
 * // Output:
 * // Hexadecimal: 0x89f8e091e5e80d5
 * // Decimal: 621371443415777493
 * ```
 */
export function hexToDecimalString(s: string): string {

    // Define a mapping from hexadecimal characters to decimal values
    const hexToDecimalMap: Record<string, string> = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        'a': '10',
        'b': '11',
        'c': '12',
        'd': '13',
        'e': '14',
        'f': '15',
    };

    // Remove the '0x' prefix if it exists
    let hexString: string = s.startsWith('0x')
        ? s.slice(2)
        : s;

    let decimalValue = '0';

    // Iterate through the hexadecimal string from right to left
    for (let i = hexString.length - 1; i >= 0; i--) {
        const hexDigit = hexString[i].toLowerCase();
        const decimalDigit = hexToDecimalMap[hexDigit];
        if (decimalDigit === undefined) {
            throw new Error(`Invalid hexadecimal character: ${hexDigit}`);
        }
        const powerOf16 = BigInt(hexString.length - 1 - i);
        const digitValue = BigInt(decimalDigit);
        decimalValue = (BigInt(decimalValue) + digitValue * (16n ** powerOf16)).toString();
    }

    return decimalValue;
}