import { EVMChain } from "../../types";

/**
 * Removes 2 chains from an array
 * @param chains a hashmap of chains
 * @param chainOneName first chain name
 * @param chainTwoName second chain name
 * @returns the original list minus filtered
 */
export function filterTwoOut<T>(
    chains: { [key in keyof T]: EVMChain },
    chainOneName: string,
    chainTwoName: string,
): EVMChain[] | [] {
    if (chains && chainOneName && chainTwoName) {
        const chainValues: EVMChain[] | [] = Object.values(chains)
        try {
            return chainValues.filter(chain =>
                chain.name.toLowerCase() !== chainOneName.toLowerCase()
                && chain.name.toLowerCase() !== chainTwoName.toLowerCase()
            );
        } catch (error) {
            console.error(error)
            return [];
        }
    }
    return [];
}