/**
 * 
 * @param a 
 * @param b 
 * @returns 
 */
export function format2BigInt(
    a: string | number | bigint,
    b: string | number | bigint
): { _a: bigint, _b: bigint } {
    let _a, _b;
    if (typeof a === 'string') { _a = a.replace(/[^0-9]/g, '') }
    else { _a = a }
    if (typeof b === 'string') { _b = b.replace(/[^0-9]/g, '') }
    else { _b = b }
    return { _a: BigInt(_a), _b: BigInt(_b) }
}


/**
 * Returns unsigned integer difference
 * @param a dividend x decimals
 * @param b divider x decimals
 * @returns uint256 difference
 */
export const getUintDiff = (
    a: string | number | bigint,
    b: string | number | bigint
): bigint => {
    const { _a, _b } = format2BigInt(a, b);
    if (a && b) {
        return BigInt(_a) - BigInt(_b);
    }
    return 0n;
}


/**
 * Checks whether a >= b
 * @param a 
 * @param b 
 * @returns true | false
 */
export const isGreaterOrEqual = (
    a: string | number | bigint,
    b: string | number | bigint
): boolean => {
    const { _a, _b } = format2BigInt(a, b);
    return (BigInt(_a) >= BigInt(_b));
}