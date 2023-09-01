import { EVMChain } from '../types';
import { LOGO_ETHEREUM } from '../logos/chains';

export const goerli: EVMChain = {
    // Emmet.Bridge part:
    bridge: '0x52c5cF8d571b1c8cBF75b5f1bD088C1Dd4598bC7',
    logo: LOGO_ETHEREUM,
    // Common WAGMI part:
    id: 5,
    network: 'goerli',
    name: 'Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://eth-goerli.g.alchemy.com/v2'],
            webSocket: ['wss://eth-goerli.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://goerli.infura.io/v3'],
            webSocket: ['wss://goerli.infura.io/ws/v3'],
        },
        default: {
            http: ['https://gateway.tenderly.co/public/goerli'],
        },
        public: {
            http: [
                "https://rpc.ankr.com/eth_goerli",
                "https://eth-goerli.public.blastapi.io",
                "https://goerli.blockpi.network/v1/rpc/public",
                "https://endpoints.omniatech.io/v1/eth/goerli/public"
            ],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Etherscan',
            url: 'https://goerli.etherscan.io',
        },
        default: {
            name: 'Etherscan',
            url: 'https://goerli.etherscan.io',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0x56522D00C410a43BFfDF00a9A569489297385790',
            blockCreated: 8765204,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6507670,
        },
    },
    testnet: true,
} as const;