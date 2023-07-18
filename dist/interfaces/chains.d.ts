import { EVMChain } from "../types/index.js";
export interface EVMChainMap {
    [chainName: string]: EVMChain;
}
export interface ChainIdToNameMap {
    [id: number]: string;
}
export interface ChainNameToId {
    [chainName: string]: number;
}
