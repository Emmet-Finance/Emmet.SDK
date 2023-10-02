import { EVMChain } from '../types';
import { LOGO_SHARDEUM } from '../logos/chains';

export const shardeumBetanet: EVMChain = {
    // Emmet.Bridge part:
    bridge: '',
    logo: LOGO_SHARDEUM,
    // Common WAGMI part:
    id: 8081, // 0x1f91
    name: 'Shardeum Betanet',
    network: 'shmBetanet',
    nativeCurrency: { name: 'SHARDEUM', symbol: 'SHM', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://dapps.shardeum.org'],
        },
        public: {
            http: ['https://dapps.shardeum.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Shardeum Explorer',
            url: 'https://explorer-dapps.shardeum.org/',
        },
    },
    testnet: true,
} as const;