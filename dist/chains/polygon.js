"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polygon = void 0;
const chains_1 = require("../logos/chains");
exports.polygon = {
    bridge: '',
    logo: chains_1.LOGO_POLYGON,
    id: 137,
    name: 'Polygon',
    network: 'matic',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://polygon-mainnet.g.alchemy.com/v2'],
            webSocket: ['wss://polygon-mainnet.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://polygon-mainnet.infura.io/v3'],
            webSocket: ['wss://polygon-mainnet.infura.io/ws/v3'],
        },
        default: {
            http: ['https://polygon.llamarpc.com'],
        },
        public: {
            http: ["https://polygon.llamarpc.com",
                "https://poly-rpc.gateway.pokt.network",
                "https://rpc-mainnet.matic.quiknode.pro",
                "https://polygon-rpc.com",
                "https://matic-mainnet.chainstacklabs.com",
                "https://poly-rpc.gateway.pokt.network",
                "https://polygon-bor.publicnode.com"],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
        },
        default: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
        },
    },
    testnet: false
};
//# sourceMappingURL=polygon.js.map