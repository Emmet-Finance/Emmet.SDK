export declare const bscTestnet: {
    readonly bridge: "0x8c1f71AcE61b152bD2224736813410aD690F68cD";
    readonly logo: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 2496 2496\" style=\"enable-background:new 0 0 2496 2496;\" xml:space=\"preserve\">\n<g>\n\t<path style=\"fill-rule:evenodd;clip-rule:evenodd;fill:#F0B90B;\" d=\"M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248\n\t\tS0,1937.3,0,1248S558.7,0,1248,0L1248,0z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3\n\t\tl-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4\n\t\tL1084.3,821.4z\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6\n\t\tl164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918\n\t\tL1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578\n\t\tL1809.2,1578z\"/>\n\t<polygon style=\"fill:#FFFFFF;\" points=\"1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6 \t\"/>\n\t<path style=\"fill:#FFFFFF;\" d=\"M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4\n\t\tL968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6\n\t\tl-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z\"/>\n</g>\n</svg>";
    readonly id: 97;
    readonly name: "Binance Smart Chain Testnet";
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
