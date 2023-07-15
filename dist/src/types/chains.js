import mainnets from '../../data/mainnet.json';
import testnets from '../../data/testnet.json';
export const EVMMainnetNames = Object.keys(mainnets);
export const EVMTestnetNames = Object.keys(testnets);
export let MAINNET_CHAIN_IDS = {};
export let TESTNET_CHAIN_IDS = {};
export let MAINNET_CHAIN_ID_TO_NAME = {};
export let TESTNET_CHAIN_ID_TO_NAME = {};
export let EVMMainnets = {};
EVMMainnetNames.map((chainName) => {
    EVMMainnets[chainName] = mainnets[chainName];
    MAINNET_CHAIN_IDS[chainName] = mainnets[chainName].chainId;
    MAINNET_CHAIN_ID_TO_NAME[mainnets[chainName].chainId] = chainName;
});
export let EVMTestnets = {};
EVMTestnetNames.map((chainName) => {
    EVMTestnets[chainName] = testnets[chainName];
    TESTNET_CHAIN_IDS[chainName] = testnets[chainName].chainId;
    TESTNET_CHAIN_ID_TO_NAME[testnets[chainName].chainId] = chainName;
});
