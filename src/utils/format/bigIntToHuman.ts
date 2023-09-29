import { formatFractionalPart } from "./formatFractionalPart";
import { isHexString } from "../verifiers";
import { zerroPadding } from "./zerroPadding";
import { hexToDecimalString } from "./hexToDecimalString";

/**
 * Converts a BigInt or numeric value into a human-readable string with optional decimal places.
 * 
 * @param {string | number | bigint | undefined} n The input value to be formatted.
 * @param {string | number | bigint} decimals The number of decimal places (default is 18).
 * @returns {string} The formatted human-readable string.
 * 
 * @example
 * ```ts
 * const bigIntValue = 123456789012345678901234567890123456n;
 * const floatValue = 12345.6789;
 *
 * console.log(bigIntToHuman(bigIntValue)); // Result: "123,456,789,012,345,678.901234567890123456"
 * console.log(bigIntToHuman(floatValue, 4));  // Result: "12,345.6789"
 * ```
 */
export function bigIntToHuman(
    n: string | number | bigint | undefined,
    decimals: string | number | bigint = 18n
): string {

    if (n && decimals) {
        let cleaned: string | number | bigint | boolean;
        let whole, fraction: string | number | bigint;
        let divider: bigint = typeof decimals === 'string'
            ? 10n ** BigInt(parseInt(decimals))
            : 10n ** BigInt(decimals);

        switch (typeof n) {
            case 'string':
                if (isHexString(n)) {
                    cleaned = hexToDecimalString(n);
                } else {
                    cleaned = n.replace(/[^0-9.]/g, '');
                }
                [whole, fraction] = cleaned.split('.')

                if (!fraction) {
                    fraction = ''
                    const intger = BigInt(whole + fraction) / divider;
                    fraction = BigInt(whole + fraction) % divider;
                    whole = intger;
                }
                break;
            case 'number':
                whole = parseInt(n.toString());
                fraction = (parseFloat(n.toString()) - whole)
                    .toString()
                    .split('.')[1]
                fraction = parseInt(fraction) > 0 ? parseInt(fraction) : 0;
                break;
            case 'bigint':
                whole = BigInt(n) / divider;
                fraction = BigInt(n) % divider;
                break;
        }

        if (fraction) {
            let formattedFractionalPart = formatFractionalPart(zerroPadding(fraction, decimals, 8));
            if (formattedFractionalPart.length > 8) {
                formattedFractionalPart = formattedFractionalPart.slice(0, 8)
            }
            return `${whole.toLocaleString()}.${formattedFractionalPart}`
        } else {
            return whole ? whole.toLocaleString() : '0.00';
        }

    } else {
        return '0.00'
    }
}