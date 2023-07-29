export declare const goerli: {
    readonly bridge: "0x52c5cF8d571b1c8cBF75b5f1bD088C1Dd4598bC7";
    readonly logo: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"m10.066 1.59-5.622 9.33 5.622-2.555V1.59z\" fill=\"#8A92B2\"/>\n<path d=\"M10.066 8.365 4.444 10.92l5.622 3.324v-5.88z\" fill=\"#1C3144\"/>\n<path d=\"m15.689 10.92-5.623-9.33v6.775l5.623 2.555z\" fill=\"#1C3144\"/>\n<path d=\"m10.066 14.244 5.623-3.324-5.623-2.555v5.879zM4.444 11.986l5.622 7.923v-4.6l-5.622-3.322zM10.066 15.308v4.601l5.626-7.922-5.626 3.321z\" fill=\"#1C3144\"/>\n</svg>";
    readonly id: 5;
    readonly network: "goerli";
    readonly name: "Goerli";
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://eth-goerli.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://eth-goerli.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://goerli.infura.io/v3"];
            readonly webSocket: readonly ["wss://goerli.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://rpc.ankr.com/eth_goerli"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.ankr.com/eth_goerli", "https://eth-goerli.public.blastapi.io", "https://goerli.blockpi.network/v1/rpc/public", "https://endpoints.omniatech.io/v1/eth/goerli/public"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Etherscan";
            readonly url: "https://goerli.etherscan.io";
        };
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://goerli.etherscan.io";
        };
    };
    readonly contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0x56522D00C410a43BFfDF00a9A569489297385790";
            readonly blockCreated: 8765204;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 6507670;
        };
    };
    readonly testnet: true;
};
