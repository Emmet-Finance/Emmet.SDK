
/**
 * Calculates the slippage proportion
 * @param amount the full amount
 * @param slippage the % of slippage
 * @returns the amount of slippage
 */
export function getSlippage(
    amount: bigint | string | number,
    slippage: bigint | string | number
): bigint {
    return BigInt(amount) * BigInt(slippage) / 100n;
}