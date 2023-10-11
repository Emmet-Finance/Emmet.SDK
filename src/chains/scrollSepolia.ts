import { EVMChain } from '../types';
import { LOGO_SCROLL } from '../logos/chains';

export const scrollSepolia: EVMChain = {
    // Emmet.Bridge part:
    bridge: '',
    logo: LOGO_SCROLL,
    // Common WAGMI part: https://github.com/wagmi-dev/viem/blob/main/src/chains/definitions/scrollSepolia.ts
    id: 534_351, // 0x8274f
    name: 'Scroll Sepolia',
    network: 'scroll-sepolia',
    nativeCurrency: { name: 'SETH', symbol: 'SETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://scroll-sepolia.blockpi.network/v1/rpc/public'],
            webSocket: ['wss://sepolia-rpc.scroll.io/ws'],
        },
        public: {
            http: ['https://scroll-sepolia.blockpi.network/v1/rpc/public'],
            webSocket: ['wss://sepolia-rpc.scroll.io/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Scroll',
            url: 'https://sepolia.scrollscan.dev',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 9473,
        },
    },
    testnet: true,
}