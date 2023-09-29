
import { EVMChain } from "../../types";
import { getSelectedChain } from "./getSelectedChain";

export function getBridgeAddress(chainName: string): string {
    const chain: EVMChain = getSelectedChain(chainName);
    return chain.bridge;
}