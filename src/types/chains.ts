
import mainnets from '../../data/mainnet.json' ;
import testnets from '../../data/testnet.json' ;
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
export const EVMMainnetNames:MainnetEVMName[] = Object.keys(mainnets) as MainnetEVMName[];
/**
 * An array of EVM Testnet names, Ex.: [goerly, tbsc, ...]
 */
export const EVMTestnetNames:TestnetEVMName[] = Object.keys(testnets) as TestnetEVMName[];

/**
 * Hashmap: {key:chainName, value:chainId}
 */
// @ts-ignore
export let MAINNET_CHAIN_IDS: {[chainName in MainnetEVMName]: string;} = {};

/**
 * Hashmap: {key:chainName, value:chainId}
 */
// @ts-ignore
export let TESTNET_CHAIN_IDS: {[chainName in TestnetEVMName]: string;} = {};

/**
 * Hashmap: {key:chainId, value:chainName}
 */
export let MAINNET_CHAIN_ID_TO_NAME: {[chainId:string]:string} = {};

/**
 * Hashmap: {key:chainId, value:chainName}
 */
export let TESTNET_CHAIN_ID_TO_NAME: {[chainId:string]:string} = {};


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
