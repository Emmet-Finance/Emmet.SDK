import mainnets from '../data/mainnet.json' assert { type: "json" };
import testnets from '../data/testnet.json' assert { type: "json" };
export const EVMMainnetNames = Object.keys(mainnets);
export const EVMTestnetNames = Object.keys(testnets);
export let EVMMainnets = {};
EVMMainnetNames.map((chainName) => {
    EVMMainnets[chainName] = mainnets[chainName];
});
export let EVMTestnets = {};
EVMTestnetNames.map((chainName) => {
    EVMTestnets[chainName] = testnets[chainName];
});
