
import {Chain as wagmiChain} from './wagmi'
import { ChainIdToNameMap, ChainNameToId, EVMChainMap } from '../interfaces/chains.js';
import {
    MAINNETS,
    bsc,
    ethereum,
    fuse,
    polygon,
    
    TESTNETS,
    bscTestnet,
    goerli,
    mumbai,
    sparknet,
} from '../chains';

/**
 * Type restricting chain names
 */
export type TMainnetChainNames = keyof typeof MAINNETS;

/**
 * Type restricting chain names
 */
export type TTestnetChainNames = keyof typeof TESTNETS;

export type TChainName = TMainnetChainNames | TTestnetChainNames;

export type EmmetChain = {
    bridge: string,
    logo:string,
}

export type EVMChain = wagmiChain & EmmetChain;

/**
 * Supported Mainnets
 */
export const mainnets: EVMChain[] = [
    bsc,
    ethereum,
    fuse,
    polygon
];

/**
 * Supported Testnets
 */
export const testnets: EVMChain[] = [
    bscTestnet,
    goerli,
    mumbai,
    sparknet,
];

/**
 * Hashmap: {key:chainName, value:chainId}
 */
// @ts-ignore
export let mainnetChainIds: ChainNameToId = {};

/**
 * Hashmap: {key:chainName, value:chainId}
 */
// @ts-ignore
export let testnetChainIds: ChainNameToId = {};

/**
 * Hashmap: {id:number, value:chainName}
 */
export let mainnetChainIdToName: ChainIdToNameMap = {};

/**
 * Hashmap: {id:string, value:chainName}
 */
export let testnetChainIdToName: ChainIdToNameMap = {};

/**
 * Hashmap: {chainName:string, value:EVMChain }
 */
export let EVMMainnets: EVMChainMap = {};

/**
 * Hashmap: {chainName:string, value:EVMChain }
 */
export let EVMTestnets: EVMChainMap = {};

// O(1) access to mainnets
mainnets.map((net:EVMChain) => {

    EVMMainnets[net.name] = net;
    mainnetChainIds[net.name] = net.id;
    mainnetChainIdToName[net.id] = net.name;

});

// O(1) access to testnets
testnets.map((net:EVMChain) => {

    EVMTestnets[net.name] = net;
    testnetChainIds[net.name] = net.id;
    testnetChainIdToName[net.id] = net.name;

});
