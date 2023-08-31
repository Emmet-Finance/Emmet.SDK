import { EVMChain } from '../types';
import {LOGO_ZETA_CHAIN} from '../logos/chains';

export const athens3: EVMChain = {
    // Emmet.Bridge part:
    bridge: '',
    logo: LOGO_ZETA_CHAIN,
    // Common WAGMI part:
    id: 7000, //0x1b58
    name: 'ZetaChain Mainnet',
    network: 'ZetaChain',
    nativeCurrency: { name: 'ZETA', symbol: 'ZETA', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://api.mainnet.zetachain.com/evm'] },
        public: { http: ['https://api.mainnet.zetachain.com/evm'] },
    },
    blockExplorers: {
        default: { name: 'ZetaChain Explorer', url: '' },
    },
    testnet:false
} as const;