
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

/**
 * A combination of mainnet & testnet mappings: chainId => name
 */
export const ChainIdToName: ChainIdToNameMap =  mainnetChainIdToName && testnetChainIdToName;

/**
 * A combination of mainnet & testnet mappings: name => chainId
 */
export const AllChainNamesToId: ChainNameToId = mainnetChainIds && testnetChainIds;

/**
 * O(1) conversion of a mainnet chain's name to its internal bridge index
 */
export const mainnetChainNameToIndex: { [key: string]: number } = {
    'Ethereum': 1,
    'BSC': 2,
    'Polygon': 3,
    'Fuse': 4
};

/**
 * O(1) conversion of a mainnet chain's internal bridge index to its name
 */
export const mainnetChainIndexToName: { [key: number]: string } = {
    1: 'Ethereum',
    2: 'BSC',
    3: 'Polygon',
    4: 'Fuse'
};

export const BridgeChainIds = {
    goerly: 1,
    bsctestnet: 2,
    mumbai:3,
    sparknet:4
}

/**
 * O(1) conversion of testnet chain name to its internal bridge index
 */
export const testnetChainNameToIndex: { [key: string]: number } = {
    'Goerli': 1,
    'BSC Testnet': 2,
    'Mumbai': 3,
    'Sparknet': 4
};

/**
 * O(1) conversion of testnet chain's internal bridge index to its name
 */
export const testnetChainIndexToName: { [key: number]: string } = {
    1: 'Goerli',
    2: 'BSC Testnet',
    3: 'Mumbai',
    4: 'Sparknet'
};

/**
 * O(1) conversion of any chain name to its internal bridge index
 */
export const allChainNameToIndex = mainnetChainNameToIndex && testnetChainNameToIndex;

/**
 * O(1) conversion of any chain's internal bridge index to its name
 */
export const allChainIndexToName = mainnetChainIndexToName && testnetChainIndexToName;