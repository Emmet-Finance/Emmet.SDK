"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allChainIndexToName = exports.allChainNameToIndex = exports.testnetChainIndexToName = exports.testnetChainNameToIndex = exports.BridgeChainIds = exports.mainnetChainIndexToName = exports.mainnetChainNameToIndex = exports.AllChainNamesToId = exports.ChainIdToName = exports.EVMTestnets = exports.EVMMainnets = exports.testnetChainIdToName = exports.mainnetChainIdToName = exports.testnetChainIds = exports.mainnetChainIds = exports.testnets = exports.mainnets = void 0;
const chains_1 = require("../chains");
exports.mainnets = [
    chains_1.bsc,
    chains_1.Mainnet,
    chains_1.fuse,
    chains_1.polygon
];
exports.testnets = [
    chains_1.athens3,
    chains_1.bscTestnet,
    chains_1.goerli,
    chains_1.mumbai,
    chains_1.sparknet,
];
exports.mainnetChainIds = {};
exports.testnetChainIds = {};
exports.mainnetChainIdToName = {};
exports.testnetChainIdToName = {};
exports.EVMMainnets = {};
exports.EVMTestnets = {};
exports.mainnets.map((net) => {
    exports.EVMMainnets[net.name] = net;
    exports.mainnetChainIds[net.name] = net.id;
    exports.mainnetChainIdToName[net.id] = net.name;
});
exports.testnets.map((net) => {
    exports.EVMTestnets[net.name] = net;
    exports.testnetChainIds[net.name] = net.id;
    exports.testnetChainIdToName[net.id] = net.name;
});
exports.ChainIdToName = exports.mainnetChainIdToName && exports.testnetChainIdToName;
exports.AllChainNamesToId = exports.mainnetChainIds && exports.testnetChainIds;
exports.mainnetChainNameToIndex = {
    'Mainnet': 1,
    'BSC': 2,
    'Polygon': 3,
    'Fuse': 4,
    'ZetaChain': 5,
    'BASE': 6
};
exports.mainnetChainIndexToName = {
    1: 'Mainnet',
    2: 'BSC',
    3: 'Polygon',
    4: 'Fuse',
    5: 'ZetaChain',
    6: 'BASE'
};
exports.BridgeChainIds = {
    goerli: 1,
    bsctestnet: 2,
    mumbai: 3,
    sparknet: 4,
    athens3: 5,
    basegoerli: 6
};
exports.testnetChainNameToIndex = {
    'Goerli': 1,
    'BSC Testnet': 2,
    'Mumbai': 3,
    'Sparknet': 4,
    'Athens3': 5,
    'Base Goerli': 6
};
exports.testnetChainIndexToName = {
    1: 'Goerli',
    2: 'BSC Testnet',
    3: 'Mumbai',
    4: 'Sparknet',
    5: 'Athens3',
    6: 'Base Goerli'
};
exports.allChainNameToIndex = exports.mainnetChainNameToIndex && exports.testnetChainNameToIndex;
exports.allChainIndexToName = exports.mainnetChainIndexToName && exports.testnetChainIndexToName;
//# sourceMappingURL=chains.js.map