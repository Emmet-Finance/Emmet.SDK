export declare const ethereum: {
    readonly bridge: "";
    readonly logo: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"100%\" height=\"100%\" version=\"1.1\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\nviewBox=\"0 0 784.37 1277.39\"\n xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n xmlns:xodm=\"http://www.corel.com/coreldraw/odm/2003\">\n <g id=\"Layer_x0020_1\">\n  <metadata id=\"CorelCorpID_0Corel-Layer\"/>\n  <g id=\"_1421394342400\">\n   <g>\n    <polygon fill=\"#343434\" fill-rule=\"nonzero\" points=\"392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 \"/>\n    <polygon fill=\"#8C8C8C\" fill-rule=\"nonzero\" points=\"392.07,0 -0,650.54 392.07,882.29 392.07,472.33 \"/>\n    <polygon fill=\"#3C3C3B\" fill-rule=\"nonzero\" points=\"392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 \"/>\n    <polygon fill=\"#8C8C8C\" fill-rule=\"nonzero\" points=\"392.07,1277.38 392.07,956.52 -0,724.89 \"/>\n    <polygon fill=\"#141414\" fill-rule=\"nonzero\" points=\"392.07,882.29 784.13,650.54 392.07,472.33 \"/>\n    <polygon fill=\"#393939\" fill-rule=\"nonzero\" points=\"0,650.54 392.07,882.29 392.07,472.33 \"/>\n   </g>\n  </g>\n </g>\n</svg>";
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
