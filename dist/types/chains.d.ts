import { Chain as wagmiChain } from './wagmi';
import { ChainIdToNameMap, ChainNameToId, EVMChainMap } from '../interfaces/chains.js';
export type EmmetChain = {
    bridge: string;
    logo: string;
};
export type EVMChain = wagmiChain & EmmetChain;
export declare const mainnets: EVMChain[];
export declare const testnets: EVMChain[];
export declare let mainnetChainIds: ChainNameToId;
export declare let testnetChainIds: ChainNameToId;
export declare let mainnetChainIdToName: ChainIdToNameMap;
export declare let testnetChainIdToName: ChainIdToNameMap;
export declare let EVMMainnets: EVMChainMap;
export declare let EVMTestnets: EVMChainMap;
