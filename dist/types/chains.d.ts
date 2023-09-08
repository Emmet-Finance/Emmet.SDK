import { Chain as wagmiChain } from './wagmi';
import { ChainIdToNameMap, ChainNameToId, EVMChainMap } from '../interfaces/chains.js';
import { MAINNETS, TESTNETS } from '../chains';
export type TMainnetChainNames = keyof typeof MAINNETS;
export type TTestnetChainNames = keyof typeof TESTNETS;
export type TChainName = TMainnetChainNames | TTestnetChainNames;
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
export declare const ChainIdToName: ChainIdToNameMap;
export declare const AllChainNamesToId: ChainNameToId;
export declare const mainnetChainNameToIndex: {
    [key: string]: number;
};
export declare const mainnetChainIndexToName: {
    [key: number]: string;
};
export declare const BridgeChainIds: {
    goerli: number;
    bsctestnet: number;
    mumbai: number;
    sparknet: number;
    athens3: number;
    basegoerli: number;
};
export declare const testnetChainNameToIndex: {
    [key: string]: number;
};
export declare const testnetChainIndexToName: {
    [key: number]: string;
};
export declare const allChainNameToIndex: {
    [key: string]: number;
};
export declare const allChainIndexToName: {
    [key: number]: string;
};
