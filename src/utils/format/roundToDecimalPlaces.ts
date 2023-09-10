/**
 * Rounds a floating-point number to the specified number of decimal places.
 *
 * @param {number} value The number to be rounded.
 * @param {number} decimalPlaces The number of decimal places to round to.
 * @returns {string} The rounded number as a string.
 *
 * @example
 * ```ts
 * const inputNumber = 12.3456789;
 * console.og(roundToDecimalPlaces(inputNumber, 4));
 * // Result: "12.3457"
 * ```
 */
export function roundToDecimalPlaces(value: number, decimalPlaces: number): string {
    const multiplier = 10 ** decimalPlaces;
    const roundedValue = Math.round(value * multiplier) / multiplier;
    return roundedValue.toFixed(decimalPlaces);
}