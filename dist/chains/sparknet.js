"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sparknet = void 0;
const chains_1 = require("../logos/chains");
exports.sparknet = {
    bridge: '0xf2851831674d1630f49a9c000A34d5A8E167577C',
    logo: chains_1.LOGO_FUSE,
    id: 123,
    name: 'Sparknet',
    network: 'fuse',
    nativeCurrency: { name: 'Spark', symbol: 'SPARK', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.fusespark.io'] },
        public: { http: ['https://rpc.fusespark.io'] },
    },
    blockExplorers: {
        default: { name: 'Sparknet Explorer', url: 'https://explorer.fusespark.io' },
    },
    testnet: true
};
//# sourceMappingURL=sparknet.js.map