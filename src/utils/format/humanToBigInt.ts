import { replaceAll } from "./replaceAll";

/**
 * Converts a human readable number representation to `bigint`
 * @param n the number to be converted
 * @param decimals 
 * @returns 
 */
export function humanToBigInt(
    n: string | undefined,
    decimals: number | string = 18
): bigint {

    if (!n || (typeof n === 'string' && n.includes('NaN'))) { return 0n }
    let value: string, whole: string, fraction: string;

    value = replaceAll(n, ",", '');
    [whole, fraction] = value.split('.');

    if (!fraction) { fraction = '' }
    const _dec = typeof decimals === 'string' ? parseInt(decimals) : decimals;
    while (fraction.length < _dec) { fraction += '0' }

    return BigInt(whole + fraction);
}