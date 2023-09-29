import { ALL_CHAINS } from "../../chains";
import { EVMChain } from "../../types";
import { chainNameToKey } from "../format";

export type TAllChainNames = keyof typeof ALL_CHAINS;

export function getSelectedChain(chainName: string): EVMChain {
    return ALL_CHAINS[chainNameToKey<TAllChainNames>(chainName)];
}