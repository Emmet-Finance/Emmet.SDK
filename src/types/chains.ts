
import mainnets from '../data/mainnet.json' assert { type: "json" };
import testnets from '../data/testnet.json' assert { type: "json" };
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


export let EVMMainnets: EVMChainMap = {};
EVMMainnetNames.map((chainName:MainnetEVMName) => {
    // TypeChecked chain params
    EVMMainnets[chainName] = mainnets[chainName] as EVMChain;
})

export let EVMTestnets: EVMChainMap = {};
EVMTestnetNames.map((chainName:TestnetEVMName) => {
    // TypeChecked chain params
    EVMTestnets[chainName] = testnets[chainName] as EVMChain;
})

