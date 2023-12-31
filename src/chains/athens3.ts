import { EVMChain } from '../types';
import {LOGO_ZETA_CHAIN} from '../logos/chains';

export const athens3: EVMChain = {
    // Emmet.Bridge part:
    bridge: '0x6b30f76CecE9F92D27f0e9Ad78312E77709E74A5',
    logo: LOGO_ZETA_CHAIN,
    // Common WAGMI part:
    id: 7001, //0x1b59
    name: 'Athens3',
    network: 'ZetaChain',
    nativeCurrency: { name: 'ZETA', symbol: 'ZETA', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'] },
        public: { http: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'] },
    },
    blockExplorers: {
        default: { name: 'Athens3 Explorer', url: 'https://zetachain-Athens-3.blockscout.com' },
    },
    testnet:true
} as const; // https://www.zetachain.com/docs/reference/testnet/