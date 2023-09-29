import { EVMChain } from "../../types";

/**
 * Removes the selected chain from the list
 * @param chains an array of supported chains
 * @param chainName the selected one
 * @returns the original list minus selected
 */
export function filterOneOut<T>(
    chains: { [key in keyof T]: EVMChain },
    chainName: string
): EVMChain[] | [] {

    if (chains && chainName) {
        const chainValues: EVMChain[] | [] = Object.values(chains)
        try {
            return chainValues.filter(chain =>
                chain.name.toLowerCase() !== chainName.toLowerCase());
        } catch (error) {
            console.error(error)
            return [];
        }

    }
    return [];
}