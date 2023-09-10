/**
 * Formats a blockchain name by removing non-alphanumeric characters.
 *
 * @param {string} chainName The blockchain name to be formatted.
 * @returns {string} The formatted blockchain name with mixed case.
 *
 * @example
 * ```ts
 * const blockchainName = "Ethereum 2.0";
 * const formattedName = formatChainNameMixedCase(blockchainName);
 * // Result: "Ethereum20"
 * ```
 */
export function formatChainNameMixedCase(chainName: string): string {
    if (chainName) {
        return chainName.replace(/[^a-zA-Z0-9]/g, '');
    }
    return '';
}