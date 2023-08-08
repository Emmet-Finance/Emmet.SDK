import { bsc } from './bsc';
import { ethereum } from './ethereum';
import { fuse } from './fuse';
import { polygon } from './polygon';
import { bscTestnet } from './bscTestnet';
import { goerli } from './goerly';
import { mumbai } from './mumbai';
import { sparknet } from './sparknet';
declare const MAINNETS: {
    bsc: {
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
    ethereum: {
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
    fuse: {
        readonly bridge: "";
        readonly logo: "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 484 483\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"242.057\" cy=\"241.159\" r=\"241.159\" fill=\"#B4F9BA\"/>\n<path d=\"M184.543 100.393L239.67 68.5582C241.24 67.6525 243.187 67.6525 244.757 68.5582L390.046 152.441C391.616 153.347 392.582 155.022 392.597 156.834L392.793 214.526C392.793 216.353 391.827 218.044 390.242 218.949L335.191 250.739C331.81 252.702 327.568 250.256 327.553 246.347L327.372 194.571C327.372 192.76 326.391 191.084 324.821 190.178L184.543 109.209C181.147 107.247 181.147 102.356 184.543 100.393Z\" fill=\"#010101\"/>\n<path d=\"M148.924 361.714L93.8128 329.894C92.2278 328.989 91.2617 327.313 91.2617 325.487V157.721C91.2617 155.91 92.2278 154.234 93.7977 153.313L143.671 124.286C145.256 123.365 147.204 123.365 148.774 124.286L203.825 156.076C207.206 158.038 207.221 162.914 203.84 164.891L159.098 190.93C157.529 191.836 156.563 193.511 156.563 195.338V357.322C156.563 361.246 152.321 363.692 148.924 361.73V361.714Z\" fill=\"#010101\"/>\n<path d=\"M392.841 261.829V325.47C392.841 327.296 391.875 328.972 390.29 329.878L245.001 413.76C243.431 414.666 241.499 414.666 239.929 413.76L189.859 385.08C188.274 384.174 187.293 382.483 187.293 380.657V317.092C187.293 313.182 191.52 310.737 194.916 312.669L239.839 338.406C241.408 339.312 243.341 339.297 244.91 338.406L385.188 257.407C388.584 255.444 392.826 257.89 392.826 261.814L392.841 261.829Z\" fill=\"#010101\"/>\n</svg>";
        readonly id: 122;
        readonly name: "Fuse";
        readonly network: "fuse";
        readonly nativeCurrency: {
            readonly name: "Fuse";
            readonly symbol: "FUSE";
            readonly decimals: 18;
        };
        readonly rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.fuse.io"];
            };
            readonly public: {
                readonly http: readonly ["https://fuse-mainnet.chainstacklabs.com", "https://rpc.fuse.io", "https://fuse-rpc.gateway.pokt.network", "https://fuse.api.onfinality.io/public"];
            };
        };
        readonly blockExplorers: {
            readonly default: {
                readonly name: "Fuse Explorer";
                readonly url: "https://explorer.fuse.io";
            };
        };
        readonly testnet: false;
    };
    polygon: {
        readonly bridge: "";
        readonly logo: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#fa9lm8z63a)\">\n\t<path d=\"m14.63 14.153 4.461-2.576a.768.768 0 0 0 .383-.663V5.761a.769.769 0 0 0-.383-.663L14.63 2.522a.768.768 0 0 0-.765 0L9.402 5.098a.768.768 0 0 0-.383.663v9.208L5.89 16.775l-3.129-1.806v-3.613l3.13-1.806 2.063 1.19V8.318l-1.681-.97a.768.768 0 0 0-.766 0L1.045 9.923a.768.768 0 0 0-.383.663v5.153c0 .272.147.526.383.663l4.462 2.576a.77.77 0 0 0 .766 0l4.462-2.576a.768.768 0 0 0 .382-.663V6.532l.057-.033 3.072-1.773 3.129 1.806v3.613l-3.129 1.806-2.06-1.19v2.424l1.677.97a.77.77 0 0 0 .766 0v-.002z\" fill=\"url(#bauazvqg4b)\"/>\n</g>\n<defs>\n\t<linearGradient id=\"bauazvqg4b\" x1=\"2.261\" y1=\"16.442\" x2=\"18.429\" y2=\"4.653\" gradientUnits=\"userSpaceOnUse\">\n\t\t<stop stop-color=\"#9A3C8F\"/>\n\t\t<stop offset=\".98\" stop-color=\"#734D9A\"/>\n\t\t<stop offset=\"1\" stop-color=\"#734E9B\"/>\n\t</linearGradient>\n\t<clipPath id=\"fa9lm8z63a\">\n\t\t<path fill=\"#fff\" transform=\"translate(.068 .75)\" d=\"M0 0h20v20H0z\"/>\n\t</clipPath>\n</defs>\n</svg>";
        readonly id: 137;
        readonly name: "Polygon";
        readonly network: "matic";
        readonly nativeCurrency: {
            readonly name: "MATIC";
            readonly symbol: "MATIC";
            readonly decimals: 18;
        };
        readonly rpcUrls: {
            readonly alchemy: {
                readonly http: readonly ["https://polygon-mainnet.g.alchemy.com/v2"];
                readonly webSocket: readonly ["wss://polygon-mainnet.g.alchemy.com/v2"];
            };
            readonly infura: {
                readonly http: readonly ["https://polygon-mainnet.infura.io/v3"];
                readonly webSocket: readonly ["wss://polygon-mainnet.infura.io/ws/v3"];
            };
            readonly default: {
                readonly http: readonly ["https://polygon.llamarpc.com"];
            };
            readonly public: {
                readonly http: readonly ["https://polygon.llamarpc.com", "https://poly-rpc.gateway.pokt.network", "https://rpc-mainnet.matic.quiknode.pro", "https://polygon-rpc.com", "https://matic-mainnet.chainstacklabs.com", "https://poly-rpc.gateway.pokt.network", "https://polygon-bor.publicnode.com"];
            };
        };
        readonly blockExplorers: {
            readonly etherscan: {
                readonly name: "PolygonScan";
                readonly url: "https://polygonscan.com";
            };
            readonly default: {
                readonly name: "PolygonScan";
                readonly url: "https://polygonscan.com";
            };
        };
        readonly contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 25770160;
            };
        };
        readonly testnet: false;
    };
};
declare const TESTNETS: {
    bsctestnet: {
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
    goerli: {
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
    mumbai: {
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
    sparknet: {
        readonly bridge: "0xf2851831674d1630f49a9c000A34d5A8E167577C";
        readonly logo: "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 484 483\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"242.057\" cy=\"241.159\" r=\"241.159\" fill=\"#B4F9BA\"/>\n<path d=\"M184.543 100.393L239.67 68.5582C241.24 67.6525 243.187 67.6525 244.757 68.5582L390.046 152.441C391.616 153.347 392.582 155.022 392.597 156.834L392.793 214.526C392.793 216.353 391.827 218.044 390.242 218.949L335.191 250.739C331.81 252.702 327.568 250.256 327.553 246.347L327.372 194.571C327.372 192.76 326.391 191.084 324.821 190.178L184.543 109.209C181.147 107.247 181.147 102.356 184.543 100.393Z\" fill=\"#010101\"/>\n<path d=\"M148.924 361.714L93.8128 329.894C92.2278 328.989 91.2617 327.313 91.2617 325.487V157.721C91.2617 155.91 92.2278 154.234 93.7977 153.313L143.671 124.286C145.256 123.365 147.204 123.365 148.774 124.286L203.825 156.076C207.206 158.038 207.221 162.914 203.84 164.891L159.098 190.93C157.529 191.836 156.563 193.511 156.563 195.338V357.322C156.563 361.246 152.321 363.692 148.924 361.73V361.714Z\" fill=\"#010101\"/>\n<path d=\"M392.841 261.829V325.47C392.841 327.296 391.875 328.972 390.29 329.878L245.001 413.76C243.431 414.666 241.499 414.666 239.929 413.76L189.859 385.08C188.274 384.174 187.293 382.483 187.293 380.657V317.092C187.293 313.182 191.52 310.737 194.916 312.669L239.839 338.406C241.408 339.312 243.341 339.297 244.91 338.406L385.188 257.407C388.584 255.444 392.826 257.89 392.826 261.814L392.841 261.829Z\" fill=\"#010101\"/>\n</svg>";
        readonly id: 123;
        readonly name: "Sparknet";
        readonly network: "fuse";
        readonly nativeCurrency: {
            readonly name: "Spark";
            readonly symbol: "SPARK";
            readonly decimals: 18;
        };
        readonly rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.fusespark.io"];
            };
            readonly public: {
                readonly http: readonly ["https://rpc.fusespark.io"];
            };
        };
        readonly blockExplorers: {
            readonly default: {
                readonly name: "Sparknet Explorer";
                readonly url: "https://explorer.fusespark.io/";
            };
        };
        readonly testnet: true;
    };
};
declare const ALL_CHAINS: {
    bsctestnet: {
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
    goerli: {
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
    mumbai: {
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
    sparknet: {
        readonly bridge: "0xf2851831674d1630f49a9c000A34d5A8E167577C";
        readonly logo: "<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 484 483\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"242.057\" cy=\"241.159\" r=\"241.159\" fill=\"#B4F9BA\"/>\n<path d=\"M184.543 100.393L239.67 68.5582C241.24 67.6525 243.187 67.6525 244.757 68.5582L390.046 152.441C391.616 153.347 392.582 155.022 392.597 156.834L392.793 214.526C392.793 216.353 391.827 218.044 390.242 218.949L335.191 250.739C331.81 252.702 327.568 250.256 327.553 246.347L327.372 194.571C327.372 192.76 326.391 191.084 324.821 190.178L184.543 109.209C181.147 107.247 181.147 102.356 184.543 100.393Z\" fill=\"#010101\"/>\n<path d=\"M148.924 361.714L93.8128 329.894C92.2278 328.989 91.2617 327.313 91.2617 325.487V157.721C91.2617 155.91 92.2278 154.234 93.7977 153.313L143.671 124.286C145.256 123.365 147.204 123.365 148.774 124.286L203.825 156.076C207.206 158.038 207.221 162.914 203.84 164.891L159.098 190.93C157.529 191.836 156.563 193.511 156.563 195.338V357.322C156.563 361.246 152.321 363.692 148.924 361.73V361.714Z\" fill=\"#010101\"/>\n<path d=\"M392.841 261.829V325.47C392.841 327.296 391.875 328.972 390.29 329.878L245.001 413.76C243.431 414.666 241.499 414.666 239.929 413.76L189.859 385.08C188.274 384.174 187.293 382.483 187.293 380.657V317.092C187.293 313.182 191.52 310.737 194.916 312.669L239.839 338.406C241.408 339.312 243.341 339.297 244.91 338.406L385.188 257.407C388.584 255.444 392.826 257.89 392.826 261.814L392.841 261.829Z\" fill=\"#010101\"/>\n</svg>";
        readonly id: 123;
        readonly name: "Sparknet";
        readonly network: "fuse";
        readonly nativeCurrency: {
            readonly name: "Spark";
            readonly symbol: "SPARK";
            readonly decimals: 18;
        };
        readonly rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.fusespark.io"];
            };
            readonly public: {
                readonly http: readonly ["https://rpc.fusespark.io"];
            };
        };
        readonly blockExplorers: {
            readonly default: {
                readonly name: "Sparknet Explorer";
                readonly url: "https://explorer.fusespark.io/";
            };
        };
        readonly testnet: true;
    };
};
export { ALL_CHAINS, MAINNETS, bsc, ethereum, fuse, polygon, TESTNETS, bscTestnet, goerli, mumbai, sparknet, };
