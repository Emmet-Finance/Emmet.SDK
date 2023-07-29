export declare const bsc: {
    readonly bridge: "";
    readonly logo: "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"m14.719 10 2.028-2.029L18.775 10l-2.028 2.028L14.719 10zM1.222 10 3.25 7.97 5.278 10 3.25 12.027 1.222 10zM10 14.722l-3.362-3.363-2.029 2.028L10 18.779l5.39-5.39-2.027-2.029L10 14.722zM10 5.278l3.363 3.363 2.028-2.028L10 1.222l-5.39 5.39 2.027 2.029L10 5.278z\" fill=\"#F3BA2F\"/>\n<path d=\"m7.994 10 2.003-2.003L12 10l-2.003 2.003L7.994 10z\" fill=\"#F3BA2F\"/>\n</svg>";
    readonly id: 56;
    readonly name: "BNB Smart Chain";
    readonly network: "bsc";
    readonly nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BNB";
        readonly symbol: "BNB";
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://bsc-dataseed.binance.org"];
        };
        readonly public: {
            readonly http: readonly ["https://bsc-dataseed.binance.org", "https://bsc-dataseed1.ninicoin.io", "https://bscrpc.com", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
        };
        readonly default: {
            readonly name: "BscScan";
            readonly url: "https://bscscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 15921452;
        };
    };
    readonly testnet: false;
};
