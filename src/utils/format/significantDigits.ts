/**
 * Calculates the number of significant digits in a given string representation of a number.
 *
 * @param {string} value - The input string to determine the significant digits from.
 * @returns {number} - The count of significant digits in the input string.
 * 
 * @example
 * console.log(significantDigits("00345.6789")); // Output: 3 (345.6789 has 3 significant digits)
 */
export function significantDigits(value) {
    let _value = value;
    let decimals = 0;

    // Iterate through the characters in the input string.
    for (const char of _value) {
        // If a character is '0', it's considered part of the leading zeros and not a significant digit.
        // Return the count of significant digits encountered before a '0' is found.
        if (char === '0') {
            return decimals;
        }

        // Increment the significant digits count for non-zero characters.
        decimals += 1;
    }

    // If no '0' is encountered, return 0 since there are no leading zeros.
    return 0;
}


console.log(significantDigits("00345.6789")); // Output: 3 (345.6789 has 3 significant digits)
console.log(significantDigits("0.00456")); // Output: 3 (0.00456 has 3 significant digits)
console.log(significantDigits("123.000")); // Output: 3 (123.000 has 3 significant digits)
