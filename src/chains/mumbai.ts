import { EVMChain } from '../types';
import { LOGO_POLYGON } from '../logos/chains';

export const mumbai = {
    // Emmet.Bridge part:
    bridge: '0xb557a0E590B6F6485d0935b644F816E18fDb745d',
    logo: LOGO_POLYGON,
    // Common WAGMI part:
    id: 80_001,
    name: 'Polygon Mumbai',
    network: 'maticmum',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://polygon-mumbai.g.alchemy.com/v2'],
            webSocket: ['wss://polygon-mumbai.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://polygon-mumbai.infura.io/v3'],
            webSocket: ['wss://polygon-mumbai.infura.io/ws/v3'],
        },
        default: {
            http: ['https://matic-mumbai.chainstacklabs.com'],
        },
        public: {
            http: [
                "https://rpc.ankr.com/polygon_mumbai",
                "https://polygon-testnet.public.blastapi.io",
                "https://matic-mumbai.chainstacklabs.com",
                "https://rpc-mumbai.maticvigil.com",
                "https://matic-testnet-archive-rpc.bwarelabs.com",
                "https://polygontestapi.terminet.io/rpc"
            ],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'PolygonScan',
            url: 'https://mumbai.polygonscan.com',
        },
        default: {
            name: 'PolygonScan',
            url: 'https://mumbai.polygonscan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
        },
    },
    testnet: true,
} as const satisfies EVMChain;