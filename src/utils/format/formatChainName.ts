import { formatChainNameMixedCase } from "./formatChainNameMixedCase";

/**
 * Formats a blockchain name by converting it to lowercase.
 *
 * @param {string} chainName The blockchain name to be formatted.
 * @returns {string} The formatted lowercase blockchain name.
 *
 * @example
 * ```ts
 * const blockchainName = "Ethereum";
 * const formattedName = formatChainName(blockchainName);
 * // Result: "ethereum"
 * ```
 */
export function formatChainName(chainName: string): string {
    if (chainName) {
        return formatChainNameMixedCase(chainName).toLowerCase();
    }
    return '';
}