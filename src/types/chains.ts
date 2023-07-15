
import mainnets from '../../data/mainnet.json' assert { type: "json" };
import testnets from '../../data/testnet.json' assert { type: "json" };
import { EVMChainMap } from '../interfaces/chains.js';

export type EVMChain = {
    bridge: string,
    chainName: string,
    chainId: string | number,
    explorer: string,
    logo:string,
    nativeCurrency: {
        name: string,
        symbol: string,
        decimals: string | number
    },
    rpcUrls: string[]
}

/**
 * Checks for consistency of Mainnet chain names
 */
export type MainnetEVMName = keyof typeof mainnets;
/**
 * Checks for consistency of Testnet chain names
 */
export type TestnetEVMName = keyof typeof testnets;


/**
 * An array of EVM Mannet names, Ex.: [ethereum, bsc, ...]
 */
export const EVMMainnetNames:string[] = Object.keys(mainnets);
/**
 * An array of EVM Testnet names, Ex.: [goerly, tbsc, ...]
 */
export const EVMTestnetNames:string[] = Object.keys(testnets);

/**
 * Hashmap: {key:chainName, value:chainId}
 */
export let MAINNET_CHAIN_IDS = {};

/**
 * Hashmap: {key:chainName, value:chainId}
 */
export let TESTNET_CHAIN_IDS ={};

/**
 * Hashmap: {key:chainId, value:chainName}
 */
export let MAINNET_CHAIN_ID_TO_NAME = {};

/**
 * Hashmap: {key:chainId, value:chainName}
 */
export let TESTNET_CHAIN_ID_TO_NAME ={};


export let EVMMainnets: EVMChainMap = {};
EVMMainnetNames.map((chainName:MainnetEVMName) => {
    // TypeChecked chain params
    EVMMainnets[chainName] = mainnets[chainName] as EVMChain;
    MAINNET_CHAIN_IDS[chainName] = mainnets[chainName].chainId;
    MAINNET_CHAIN_ID_TO_NAME[mainnets[chainName].chainId] = chainName;
})

export let EVMTestnets: EVMChainMap = {};
EVMTestnetNames.map((chainName:TestnetEVMName) => {
    // TypeChecked chain params
    EVMTestnets[chainName] = testnets[chainName] as EVMChain;
    TESTNET_CHAIN_IDS[chainName] = testnets[chainName].chainId;
    TESTNET_CHAIN_ID_TO_NAME[testnets[chainName].chainId] = chainName;
})
