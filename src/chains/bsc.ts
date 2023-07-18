import { EVMChain } from '../types';
import { LOGO_BSC } from '../logos/chains';

export const bsc = {
    // Emmet.Bridge part:
    bridge: '',
    logo: LOGO_BSC,
    // Common WAGMI part:
    id: 56,
    name: 'BNB Smart Chain',
    network: 'bsc',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB',
    },
    rpcUrls: {
        default: { http: ['https://bsc-dataseed.binance.org'] },
        public: {
            http: ["https://bsc-dataseed.binance.org",
                "https://bsc-dataseed1.ninicoin.io",
                "https://bscrpc.com",
                "https://bsc-dataseed1.ninicoin.io",
                "https://bsc-dataseed2.ninicoin.io",
                "https://bsc-dataseed3.ninicoin.io",
                "https://bsc-dataseed4.ninicoin.io",
                "https://bsc-dataseed1.defibit.io",
                "https://bsc-dataseed2.defibit.io",
                "https://bsc-dataseed3.defibit.io"]
        },
    },
    blockExplorers: {
        etherscan: { name: 'BscScan', url: 'https://bscscan.com' },
        default: { name: 'BscScan', url: 'https://bscscan.com' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15921452,
        },
    },
    testnet: false
} as const satisfies EVMChain;