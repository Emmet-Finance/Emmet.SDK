export declare const ethereum: {
    readonly bridge: "";
    readonly logo: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"m10.066 1.59-5.622 9.33 5.622-2.555V1.59z\" fill=\"#8A92B2\"/>\n<path d=\"M10.066 8.365 4.444 10.92l5.622 3.324v-5.88z\" fill=\"#1C3144\"/>\n<path d=\"m15.689 10.92-5.623-9.33v6.775l5.623 2.555z\" fill=\"#1C3144\"/>\n<path d=\"m10.066 14.244 5.623-3.324-5.623-2.555v5.879zM4.444 11.986l5.622 7.923v-4.6l-5.622-3.322zM10.066 15.308v4.601l5.626-7.922-5.626 3.321z\" fill=\"#1C3144\"/>\n</svg>";
    readonly id: 1;
    readonly network: "homestead";
    readonly name: "Ethereum";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://eth-mainnet.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://eth-mainnet.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://mainnet.infura.io/v3"];
            readonly webSocket: readonly ["wss://mainnet.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://ethereum.publicnode.com"];
        };
        readonly public: {
            readonly http: readonly ["https://eth.llamarpc.com", "https://rpc.builder0x69.io", "https://ethereum.publicnode.com", "https://rpc.mevblocker.io", "https://rpc.payload.de"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
        };
        readonly default: {
            readonly name: "Etherscan";
            readonly url: "https://etherscan.io";
        };
    };
    readonly contracts: {
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62";
            readonly blockCreated: 16966585;
        };
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 14353601;
        };
    };
    readonly testnet: false;
};
