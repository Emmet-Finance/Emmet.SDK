/**
 * Converts a human readable number 123,456.00 to 123456n * 10n ^ decimals
 * @param amount a potential big number
 * @param decimals power of 10 to convert wei to ETH, defaults to 18
 * @returns 0n or an actual BigInt
 */
export const stringToBigNum = (
    amount: string,
    decimals: number = 18
): bigint => {
    let result: bigint = 0n
    if (amount && typeof amount === 'string') {
        const cleaned = amount.replace(',', '').replace('.', '');
        if (/^[0-9]+$/.test(cleaned)) {
            const multiplier = 10n ** BigInt(decimals);
            result = (BigInt(cleaned) * multiplier);
        }
    }
    return result;
}