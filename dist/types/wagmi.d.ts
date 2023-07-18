export type Address = `0x${string}`;
export type BlockExplorer = {
    name: string;
    url: string;
};
export type Chain = {
    id: number;
    name: string;
    network: string;
    nativeCurrency: NativeCurrency;
    rpcUrls: {
        [key: string]: RpcUrls;
        default: RpcUrls;
        public: RpcUrls;
    };
    blockExplorers?: {
        [key: string]: BlockExplorer;
        default: BlockExplorer;
    };
    contracts?: {
        ensRegistry?: Contract;
        ensUniversalResolver?: Contract;
        multicall3?: Contract;
    };
    testnet?: boolean;
};
export type Contract = {
    address: Address;
    blockCreated?: number;
};
export type NativeCurrency = {
    name: string;
    symbol: string;
    decimals: number;
};
export type RpcUrls = {
    http: readonly string[];
    webSocket?: readonly string[];
};
