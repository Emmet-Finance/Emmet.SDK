export declare const bscTestnet: {
    readonly bridge: "0x8c1f71AcE61b152bD2224736813410aD690F68cD";
    readonly logo: "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"m14.719 10 2.028-2.029L18.775 10l-2.028 2.028L14.719 10zM1.222 10 3.25 7.97 5.278 10 3.25 12.027 1.222 10zM10 14.722l-3.362-3.363-2.029 2.028L10 18.779l5.39-5.39-2.027-2.029L10 14.722zM10 5.278l3.363 3.363 2.028-2.028L10 1.222l-5.39 5.39 2.027 2.029L10 5.278z\" fill=\"#F3BA2F\"/>\n<path d=\"m7.994 10 2.003-2.003L12 10l-2.003 2.003L7.994 10z\" fill=\"#F3BA2F\"/>\n</svg>";
    readonly id: 97;
    readonly name: "BSC Testnet";
    readonly network: "bsc-testnet";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "tBNB";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://bsc-testnet.publicnode.com"];
        };
        readonly public: {
            readonly http: readonly ["https://bsc-testnet.publicnode.com", "https://endpoints.omniatech.io/v1/bsc/testnet/public", "https://data-seed-prebsc-2-s1.binance.org:8545", "https://data-seed-prebsc-1-s3.binance.org:8545", "https://data-seed-prebsc-2-s3.binance.org:8545", "https://data-seed-prebsc-1-s1.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545", "https://data-seed-prebsc-2-s2.binance.org:8545", "https://bsctestapi.terminet.io/rpc"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "BscScan";
            readonly url: "https://testnet.bscscan.com";
        };
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://testnet.bscscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 17422483;
        };
    };
    readonly testnet: true;
};
