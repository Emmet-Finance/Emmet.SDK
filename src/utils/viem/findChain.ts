import { EVMChain } from "../../types";
import { formatChainName } from "../format";

/**
 * Finds one chain by name
 * @param chains a hashmap of supported chains
 * @param chainName the selected one
 * @returns only the selected chain
 */
export function findChain<T>(
    chains: { [key in keyof T]: EVMChain },
    chainName: string
): EVMChain {
    if (chains && chainName) {
        const cleanName = formatChainName(chainName)
        return chains[cleanName as keyof T]
    }
    const keys = Object.keys(chains);
    const key = keys[0] as keyof T;
    return chains[key];
}