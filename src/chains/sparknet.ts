import { EVMChain } from '../types';
import {LOGO_FUSE} from '../logos/chains';

export const sparknet = {
    // Emmet.Bridge part:
    bridge: '0xf2851831674d1630f49a9c000A34d5A8E167577C',
    logo: LOGO_FUSE,
    // Common WAGMI part:
    id: 123, //0x7b
    name: 'Sparknet',
    network: 'fuse',
    nativeCurrency: { name: 'Fuse', symbol: 'FUSE', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.fusespark.io'] },
        public: { http: ['https://rpc.fusespark.io'] },
    },
    blockExplorers: {
        default: { name: 'Sparknet Explorer', url: 'https://explorer.fusespark.io/' },
    },
    testnet:true
} as const satisfies EVMChain