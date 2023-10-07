import { EVMChain } from '../types';
import { LOGO_SCROLL } from '../logos/chains';

export const scrollSepolia: EVMChain = {
    // Emmet.Bridge part:
    bridge: '',
    logo: LOGO_SCROLL,
    // Common WAGMI part:
    id: 534_351, // 0x8274f
    name: 'Scroll Sepolia',
    network: 'scroll-sepolia',
    nativeCurrency: { name: 'SepoliaETH', symbol: 'SETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sepolia-rpc.scroll.io'],
            webSocket: ['wss://sepolia-rpc.scroll.io/ws'],
        },
        public: {
            http: ['https://sepolia-rpc.scroll.io'],
            webSocket: ['wss://sepolia-rpc.scroll.io/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://sepolia.etherscan.io/',
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