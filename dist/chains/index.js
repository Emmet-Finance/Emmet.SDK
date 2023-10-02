"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sparknet = exports.shardeumBetanet = exports.mumbai = exports.lineaTestnet = exports.goerli = exports.bscTestnet = exports.basegoerli = exports.athens3 = exports.TESTNETS = exports.polygon = exports.linea = exports.fuse = exports.Mainnet = exports.bsc = exports.base = exports.MAINNETS = exports.ALL_CHAINS = void 0;
const bsc_1 = require("./bsc");
Object.defineProperty(exports, "bsc", { enumerable: true, get: function () { return bsc_1.bsc; } });
const ethereum_1 = require("./ethereum");
Object.defineProperty(exports, "Mainnet", { enumerable: true, get: function () { return ethereum_1.ethereum; } });
const fuse_1 = require("./fuse");
Object.defineProperty(exports, "fuse", { enumerable: true, get: function () { return fuse_1.fuse; } });
const linea_1 = require("./linea");
Object.defineProperty(exports, "linea", { enumerable: true, get: function () { return linea_1.linea; } });
const polygon_1 = require("./polygon");
Object.defineProperty(exports, "polygon", { enumerable: true, get: function () { return polygon_1.polygon; } });
const athens3_1 = require("./athens3");
Object.defineProperty(exports, "athens3", { enumerable: true, get: function () { return athens3_1.athens3; } });
const base_1 = require("./base");
Object.defineProperty(exports, "base", { enumerable: true, get: function () { return base_1.base; } });
const basegoerli_1 = require("./basegoerli");
Object.defineProperty(exports, "basegoerli", { enumerable: true, get: function () { return basegoerli_1.basegoerli; } });
const bscTestnet_1 = require("./bscTestnet");
Object.defineProperty(exports, "bscTestnet", { enumerable: true, get: function () { return bscTestnet_1.bscTestnet; } });
const goerli_1 = require("./goerli");
Object.defineProperty(exports, "goerli", { enumerable: true, get: function () { return goerli_1.goerli; } });
const lineaTestnet_1 = require("./lineaTestnet");
Object.defineProperty(exports, "lineaTestnet", { enumerable: true, get: function () { return lineaTestnet_1.lineaTestnet; } });
const mumbai_1 = require("./mumbai");
Object.defineProperty(exports, "mumbai", { enumerable: true, get: function () { return mumbai_1.mumbai; } });
const shardeumBetanet_1 = require("./shardeumBetanet");
Object.defineProperty(exports, "shardeumBetanet", { enumerable: true, get: function () { return shardeumBetanet_1.shardeumBetanet; } });
const sparknet_1 = require("./sparknet");
Object.defineProperty(exports, "sparknet", { enumerable: true, get: function () { return sparknet_1.sparknet; } });
const MAINNETS = {
    base: base_1.base,
    bsc: bsc_1.bsc,
    linea: linea_1.linea,
    Mainnet: ethereum_1.ethereum,
    fuse: fuse_1.fuse,
    polygon: polygon_1.polygon
};
exports.MAINNETS = MAINNETS;
const TESTNETS = {
    athens3: athens3_1.athens3,
    basegoerli: basegoerli_1.basegoerli,
    bsctestnet: bscTestnet_1.bscTestnet,
    goerli: goerli_1.goerli,
    lineatestnet: lineaTestnet_1.lineaTestnet,
    mumbai: mumbai_1.mumbai,
    shardeumbetanet: shardeumBetanet_1.shardeumBetanet,
    sparknet: sparknet_1.sparknet
};
exports.TESTNETS = TESTNETS;
const ALL_CHAINS = MAINNETS && TESTNETS;
exports.ALL_CHAINS = ALL_CHAINS;
//# sourceMappingURL=index.js.map