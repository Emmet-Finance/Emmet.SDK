import { EVMChain } from '../types';
import { LOGO_FUSE } from '../logos/chains';

export const fuse: EVMChain = {
    // Emmet.Bridge part:
    bridge: '',
    logo: LOGO_FUSE,
    // Common WAGMI part:
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
} as const;