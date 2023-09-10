import { formatChainName } from "./formatChainName";

/**
 * Converts a blockchain name into a corresponding key of a generic type.
 *
 * @param {string} chainName The blockchain name to be converted.
 * @returns {T} The converted key of the specified generic type.
 *
 * @example
 * ```ts
 * const blockchainName = "Ethereum";
 * const blockchainKey = chainNameToKey<BlockchainKey>(blockchainName);
 * // Result: BlockchainKey.Ethereum
 * ```
 */
export function chainNameToKey<T>(chainName: string): T {
    return (formatChainName(chainName) as unknown) as T;
}