"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainnetTokens = exports.testnetTokens = void 0;
const eth_1 = __importDefault(require("./testnet/eth"));
const busd_1 = __importDefault(require("./testnet/busd"));
const dai_1 = __importDefault(require("./testnet/dai"));
const emmet_1 = __importDefault(require("./testnet/emmet"));
const usdt_1 = __importDefault(require("./testnet/usdt"));
exports.testnetTokens = {
    ETH: eth_1.default,
    BUSD: busd_1.default,
    DAI: dai_1.default,
    USDT: usdt_1.default,
    EMMET: emmet_1.default,
};
exports.mainnetTokens = {};
//# sourceMappingURL=index.js.map