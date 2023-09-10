/**
 * Formats a fractional part of a number by removing trailing zeros.
 *
 * @param {string} fraction The fractional part to be formatted.
 * @returns {string} The formatted fractional part with trailing zeros removed.
 *
 * @example
 * ```ts
 * const fractionalPart = "6789000";
 * const formattedFraction = formatFractionalPart(fractionalPart);
 * // Result: "6789"
 * ```
 */
export function formatFractionalPart(fraction: string): string {
    if (fraction) {
        let lastSignificant = -1;
        for (let i = fraction.length - 1; i >= 0; i--) {
            if (fraction[i] !== '0') {
                lastSignificant = i;
                break;
            }
        }
        // Find the index of the last non-zero digit in the fractional part
        const lastNonZeroIndex = lastSignificant >= 0
            ? lastSignificant + 1 : 0;
        [...fraction].reverse().findIndex(char => char !== '0');
        // Construct the formatted number with the determined significant digits
        const formattedFractionalPart = fraction.substring(0, lastNonZeroIndex);
        return formattedFractionalPart;
    } else {
        return '';
    }
}