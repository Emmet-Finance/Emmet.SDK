import { EVMChain } from '../types';
import {LOGO_ZETA_CHAIN} from '../logos/chains';

export const athens3: EVMChain = {
    // Emmet.Bridge part:
    bridge: '0x6b30f76CecE9F92D27f0e9Ad78312E77709E74A5',
    logo: LOGO_ZETA_CHAIN,
    // Common WAGMI part:
    id: 7001, //
    name: 'Athens-3',
    network: 'ZetaChain',
    nativeCurrency: { name: 'aZETA', symbol: 'aZETA', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'] },
        public: { http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'] },
    },
    blockExplorers: {
        default: { name: 'Athens-3', url: 'https://zetachain-athens-3.blockscout.com' },
    },
    testnet:true
} as const; // https://www.zetachain.com/docs/reference/testnet/