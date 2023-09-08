import { EVMChain } from '../types';
import { LOGO_BASE } from '../logos/chains';

export const basegoerli: EVMChain = {
    // Emmet.Bridge part:
    bridge: '0x6b30f76CecE9F92D27f0e9Ad78312E77709E74A5',
    logo: LOGO_BASE,
    // Common WAGMI part:
    id: 84531,
    network: 'base-goerli',
    name: 'Base Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://goerli.base.org'],
      },
      public: {
        http: ['https://goerli.base.org'],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'Basescan',
        url: 'https://goerli.basescan.org',
      },
      default: {
        name: 'Basescan',
        url: 'https://goerli.basescan.org',
      },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 1376988,
      },
    },
    testnet: true,
    // sourceId: 5, // goerli
} as const;