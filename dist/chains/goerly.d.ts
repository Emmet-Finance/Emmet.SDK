export declare const goerli: {
    readonly bridge: "0x52c5cF8d571b1c8cBF75b5f1bD088C1Dd4598bC7";
    readonly logo: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"100%\" height=\"100%\" version=\"1.1\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"\nviewBox=\"0 0 784.37 1277.39\"\n xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n xmlns:xodm=\"http://www.corel.com/coreldraw/odm/2003\">\n <g id=\"Layer_x0020_1\">\n  <metadata id=\"CorelCorpID_0Corel-Layer\"/>\n  <g id=\"_1421394342400\">\n   <g>\n    <polygon fill=\"#343434\" fill-rule=\"nonzero\" points=\"392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 \"/>\n    <polygon fill=\"#8C8C8C\" fill-rule=\"nonzero\" points=\"392.07,0 -0,650.54 392.07,882.29 392.07,472.33 \"/>\n    <polygon fill=\"#3C3C3B\" fill-rule=\"nonzero\" points=\"392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 \"/>\n    <polygon fill=\"#8C8C8C\" fill-rule=\"nonzero\" points=\"392.07,1277.38 392.07,956.52 -0,724.89 \"/>\n    <polygon fill=\"#141414\" fill-rule=\"nonzero\" points=\"392.07,882.29 784.13,650.54 392.07,472.33 \"/>\n    <polygon fill=\"#393939\" fill-rule=\"nonzero\" points=\"0,650.54 392.07,882.29 392.07,472.33 \"/>\n   </g>\n  </g>\n </g>\n</svg>";
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
