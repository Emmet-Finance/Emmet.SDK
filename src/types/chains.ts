
import { Chain as wagmiChain } from './wagmi'
import { ChainIdToNameMap, ChainNameToId, EVMChainMap } from '../interfaces/chains.js';
import {
    MAINNETS,
    bsc,
    Mainnet,
    fuse,
    linea,
    polygon,

    TESTNETS,
    athens3,
    bscTestnet,
    goerli,
    lineaTestnet,
    mumbai,
    scrollSepolia,
    skaleTestnet,
    shardeumBetanet,
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
    logo: string,
}

export type EVMChain = wagmiChain & EmmetChain;

/**
 * Supported Mainnets
 */
export const mainnets: EVMChain[] = [
    bsc,
    Mainnet,
    fuse,
    linea,
    polygon
];

/**
 * Supported Testnets
 */
export const testnets: EVMChain[] = [
    athens3,
    bscTestnet,
    goerli,
    lineaTestnet,
    mumbai,
    scrollSepolia,
    skaleTestnet,
    shardeumBetanet,
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
mainnets.map((net: EVMChain) => {

    EVMMainnets[net.name] = net;
    mainnetChainIds[net.name] = net.id;
    mainnetChainIdToName[net.id] = net.name;

});

// O(1) access to testnets
testnets.map((net: EVMChain) => {

    EVMTestnets[net.name] = net;
    testnetChainIds[net.name] = net.id;
    testnetChainIdToName[net.id] = net.name;

});

/**
 * A combination of mainnet & testnet mappings: chainId => name
 */
export const ChainIdToName: ChainIdToNameMap = mainnetChainIdToName && testnetChainIdToName;

/**
 * A combination of mainnet & testnet mappings: name => chainId
 */
export const AllChainNamesToId: ChainNameToId = mainnetChainIds && testnetChainIds;

/**
 * O(1) conversion of a mainnet chain's name to its internal bridge index
 */
export const mainnetChainNameToIndex: { [key: string]: number } = {
    'Mainnet': 1,
    'BSC': 2,
    'Polygon': 3,
    'Fuse': 4,
    'ZetaChain': 5,
    'BASE': 6,
    'Linea': 7,
    'Shardeum': 8,
    'Scroll':9,
    'Skale':10
};

/**
 * O(1) conversion of a mainnet chain's internal bridge index to its name
 */
export const mainnetChainIndexToName: { [key: number]: string } = {
    1: 'Mainnet',
    2: 'BSC',
    3: 'Polygon',
    4: 'Fuse',
    5: 'ZetaChain',
    6: 'BASE',
    7: 'Linea',
    8: 'Shardeum',
    9: 'Scroll',
    10: 'Skale'
};

export const BridgeChainIds = {
    goerli: 1,
    bsctestnet: 2,
    mumbai: 3,
    sparknet: 4,
    athens3: 5,
    basegoerli: 6,
    lineatestnet: 7,
    shardeumbetanet: 8,
    scrollsepolia: 9,
    skaletestnet: 10,
}

/**
 * O(1) conversion of testnet chain name to its internal bridge index
 */
export const testnetChainNameToIndex: { [key: string]: number } = {
    'Goerli': 1,
    'BSC Testnet': 2,
    'Mumbai': 3,
    'Sparknet': 4,
    'Athens3': 5,
    'Base Goerli': 6,
    'Linea Testnet': 7,
    'Shardeum Betanet': 8,
    'Scroll Sepolia': 9,
    'Skale Testnet' : 10,
};

/**
 * O(1) conversion of testnet chain's internal bridge index to its name
 */
export const testnetChainIndexToName: { [key: number]: string } = {
    1: 'Goerli',
    2: 'BSC Testnet',
    3: 'Mumbai',
    4: 'Sparknet',
    5: 'Athens3',
    6: 'Base Goerli',
    7: 'Linea Testnet',
    8: 'Shardeum Betanet',
    9: 'Scroll Sepolia',
    10: 'Skale Testnet'
};

/**
 * O(1) conversion of any chain name to its internal bridge index
 */
export const allChainNameToIndex = mainnetChainNameToIndex && testnetChainNameToIndex;

/**
 * O(1) conversion of any chain's internal bridge index to its name
 */
export const allChainIndexToName = mainnetChainIndexToName && testnetChainIndexToName;