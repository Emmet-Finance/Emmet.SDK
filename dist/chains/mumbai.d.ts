export declare const mumbai: {
    readonly bridge: "0xb557a0E590B6F6485d0935b644F816E18fDb745d";
    readonly logo: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#fa9lm8z63a)\">\n\t<path d=\"m14.63 14.153 4.461-2.576a.768.768 0 0 0 .383-.663V5.761a.769.769 0 0 0-.383-.663L14.63 2.522a.768.768 0 0 0-.765 0L9.402 5.098a.768.768 0 0 0-.383.663v9.208L5.89 16.775l-3.129-1.806v-3.613l3.13-1.806 2.063 1.19V8.318l-1.681-.97a.768.768 0 0 0-.766 0L1.045 9.923a.768.768 0 0 0-.383.663v5.153c0 .272.147.526.383.663l4.462 2.576a.77.77 0 0 0 .766 0l4.462-2.576a.768.768 0 0 0 .382-.663V6.532l.057-.033 3.072-1.773 3.129 1.806v3.613l-3.129 1.806-2.06-1.19v2.424l1.677.97a.77.77 0 0 0 .766 0v-.002z\" fill=\"url(#bauazvqg4b)\"/>\n</g>\n<defs>\n\t<linearGradient id=\"bauazvqg4b\" x1=\"2.261\" y1=\"16.442\" x2=\"18.429\" y2=\"4.653\" gradientUnits=\"userSpaceOnUse\">\n\t\t<stop stop-color=\"#9A3C8F\"/>\n\t\t<stop offset=\".98\" stop-color=\"#734D9A\"/>\n\t\t<stop offset=\"1\" stop-color=\"#734E9B\"/>\n\t</linearGradient>\n\t<clipPath id=\"fa9lm8z63a\">\n\t\t<path fill=\"#fff\" transform=\"translate(.068 .75)\" d=\"M0 0h20v20H0z\"/>\n\t</clipPath>\n</defs>\n</svg>";
    readonly id: 80001;
    readonly name: "Mumbai";
    readonly network: "maticmum";
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly alchemy: {
            readonly http: readonly ["https://polygon-mumbai.g.alchemy.com/v2"];
            readonly webSocket: readonly ["wss://polygon-mumbai.g.alchemy.com/v2"];
        };
        readonly infura: {
            readonly http: readonly ["https://polygon-mumbai.infura.io/v3"];
            readonly webSocket: readonly ["wss://polygon-mumbai.infura.io/ws/v3"];
        };
        readonly default: {
            readonly http: readonly ["https://matic-mumbai.chainstacklabs.com"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.ankr.com/polygon_mumbai", "https://polygon-testnet.public.blastapi.io", "https://matic-mumbai.chainstacklabs.com", "https://rpc-mumbai.maticvigil.com", "https://matic-testnet-archive-rpc.bwarelabs.com", "https://polygontestapi.terminet.io/rpc"];
        };
    };
    readonly blockExplorers: {
        readonly etherscan: {
            readonly name: "PolygonScan";
            readonly url: "https://mumbai.polygonscan.com";
        };
        readonly default: {
            readonly name: "PolygonScan";
            readonly url: "https://mumbai.polygonscan.com";
        };
    };
    readonly contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 25770160;
        };
    };
    readonly testnet: true;
};
