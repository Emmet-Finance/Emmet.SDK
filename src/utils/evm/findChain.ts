import { EVMChain } from "../../types";

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
        console.log("findChain:chainName", chainName)
        const cleanName = chainName
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '')
        return chains[cleanName as keyof T]
    }
    const keys = Object.keys(chains);
    const key = keys[0] as keyof T;
    const chain = chains[key];
    return chain;
}