"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuse = void 0;
const chains_1 = require("../logos/chains");
exports.fuse = {
    bridge: '',
    logo: chains_1.LOGO_FUSE,
    id: 122,
    name: 'Fuse',
    network: 'fuse',
    nativeCurrency: { name: 'Fuse', symbol: 'FUSE', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.fuse.io'] },
        public: {
            http: [
                "https://fuse-mainnet.chainstacklabs.com",
                "https://rpc.fuse.io",
                "https://fuse-rpc.gateway.pokt.network",
                "https://fuse.api.onfinality.io/public"
            ]
        },
    },
    blockExplorers: {
        default: { name: 'Fuse Explorer', url: 'https://explorer.fuse.io' },
    },
    testnet: false
};
//# sourceMappingURL=fuse.js.map