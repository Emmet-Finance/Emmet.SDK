import { replaceAll } from "./replaceAll";
import { significantDigits } from "./significantDigits";

/**
 * Converts a (big) number to a string like 123,456.00
 * @param balance - processed amount of tokens
 * @param decimals - power of 10 to convert wei to ETH, defaults to 18
 * @returns a formattted number with commas & dots or 0.00
 */
export const bnToHumanReadable = (
    bi: bigint | number | string | undefined,
    decimals: number = 18
): string => {
    if (!bi) return '';

    const cleaned: string = replaceAll(bi.toString(), ",", '')
    let value: bigint = BigInt(cleaned.replace('.', ''));
    const dividend = BigInt(10 ** decimals);

    let whole = value / dividend;
    let formattedWhole: string;
    if (!whole) { whole = 0n }
    formattedWhole = whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let fraction = value % dividend;
    if (!fraction) { fraction = 0n }
    let digits: number = !fraction
        ? 0
        : significantDigits(fraction.toString());

    const factor = BigInt(10 ** digits);
    const roundedFraction = fraction * factor / dividend;
    let formattedFraction = roundedFraction.toString().padStart(digits, '0');
    return `${formattedWhole}.${formattedFraction}`
}