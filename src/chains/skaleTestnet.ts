import { EVMChain } from '../types';
import { LOGO_SKALE } from '../logos/chains';

export const skaleTestnet: EVMChain = {
    // Emmet.Bridge part:
    bridge: '0xd41358A148f929ED1f49325522D182f05837cfF2',
    logo: LOGO_SKALE,
    // Common WAGMI part: https://github.com/wagmi-dev/viem/blob/main/src/chains/definitions/skale/europaTestnet.ts
    id: 476_158_412,
  name: 'SKALE Testnet',
  network: 'skale-europa-testnet',
  nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor'],
      webSocket: [
        'wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor',
      ],
    },
    public: {
      http: ['https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor'],
      webSocket: [
        'wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor',
      ],
    },
  },
  blockExplorers: {
    blockscout: {
      name: 'SKALE Explorer',
      url: 'https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com',
    },
    default: {
      name: 'SKALE Explorer',
      url: 'https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com',
    },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 2071911,
    },
  },
  testnet: true,
}