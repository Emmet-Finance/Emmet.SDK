import { EVMChain } from '../types';
import { LINEA_LOGO } from '../logos/chains';

export const lineaTestnet: EVMChain = {
    // Emmet.Bridge part:
    bridge: '0x29Cb761285C6DeD504526c77F25d1946F0D6e3D5',
    logo: LINEA_LOGO,
    // Common WAGMI part: https://github.com/wagmi-dev/viem/blob/main/src/chains/definitions/lineaTestnet.ts
    id: 59140, // 0xe704
    name: 'Linea Testnet',
    network: 'Linea',
    nativeCurrency: {
        decimals: 18,
        name: 'LETH',
        symbol: 'LETH',
    },
    rpcUrls: {
        infura: {
            http: ['https://linea-goerli.infura.io/v3'],
            webSocket: ['wss://linea-goerli.infura.io/ws/v3'],
        },
        default: {
            http: ['https://rpc.goerli.linea.build'],
            webSocket: ['wss://rpc.goerli.linea.build'],
        },
        public: {
            http: ['https://rpc.goerli.linea.build'],
            webSocket: ['wss://rpc.goerli.linea.build'],
        },
    },
    blockExplorers: {
        default: { name: 'Etherscan', url: 'https://goerli.lineascan.build/' },
        etherscan: { name: 'Etherscan', url: 'https://goerli.lineascan.build/' },
        blockscout: {
            name: 'Blockscout',
            url: 'https://explorer.goerli.linea.build'
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 498623,
        },
    },
    testnet: true,
} as const;