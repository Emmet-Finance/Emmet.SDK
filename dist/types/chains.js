"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllChainNamesToId = exports.ChainIdToName = exports.EVMTestnets = exports.EVMMainnets = exports.testnetChainIdToName = exports.mainnetChainIdToName = exports.testnetChainIds = exports.mainnetChainIds = exports.testnets = exports.mainnets = void 0;
const chains_1 = require("../chains");
exports.mainnets = [
    chains_1.bsc,
    chains_1.ethereum,
    chains_1.fuse,
    chains_1.polygon
];
exports.testnets = [
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
//# sourceMappingURL=chains.js.map