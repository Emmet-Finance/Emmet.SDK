import { EVMChain } from '../types';
import { LOGO_BSC } from '../logos/chains';

export const bscTestnet = {
    // Emmet.Bridge part:
    bridge: '0x8c1f71AcE61b152bD2224736813410aD690F68cD',
    logo: LOGO_BSC,
    // Common WAGMI part:
    id: 97, // 0x61
    name: 'BSC Testnet',
    network: 'bsc-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: { http: ['https://bsc-testnet.publicnode.com'] },
        public: {
            http: [
                "https://bsc-testnet.publicnode.com",
                "https://endpoints.omniatech.io/v1/bsc/testnet/public",
                "https://data-seed-prebsc-2-s1.binance.org:8545",
                "https://data-seed-prebsc-1-s3.binance.org:8545",
                "https://data-seed-prebsc-2-s3.binance.org:8545",
                "https://data-seed-prebsc-1-s1.binance.org:8545",
                "https://data-seed-prebsc-1-s2.binance.org:8545",
                "https://data-seed-prebsc-2-s2.binance.org:8545",
                "https://bsctestapi.terminet.io/rpc"
            ]
        },
    },
    blockExplorers: {
        etherscan: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
        default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483,
        },
    },
    testnet: true,
} as const satisfies EVMChain;