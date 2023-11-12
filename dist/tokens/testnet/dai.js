"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dai_1 = __importDefault(require("../../abi/dai"));
const tokens_1 = require("../../logos/tokens");
const DAI = {
    address: {
        goerli: "0x3fcc5C26fAd6B8fC9461E1d6f920A3C96F15f40a",
        bsctestnet: "0x2AEaD32687aB9D18bb63248f94cD0ADA3ce45ce0",
        mumbai: "0xD55C04E15B9808bf3e561367D12f3B2dfAA55d48",
        sparknet: "0xe0157e7a2C90A88371b508aD5818715680010086",
        athens3: "0x34356c720F14b7F647f79436d6d8891b3D048fd3",
        basegoerli: "0x45eAFd5844DCb7CEdF04158C71FaAb0D4380814d",
        lineatestnet: "0xC1f1d4b70824Ac54207C00a894B5Ff5ee2219FdE",
        shardeumbetanet: "0x2abe44f5e047ceecfa16d3150788bf4a1b932d69",
        scrollsepolia: "0x6439B16d1654E264eC9A293E09c42fAA7A48Ca98",
        skaletestnet: "0x0A6A1Beb7b0b3545578818f45f4e6219615d25aD",
    },
    abi: dai_1.default,
    decimals: 18,
    logo: tokens_1.LOGO_DAI,
    name: "DAI",
    native: "goerli"
};
exports.default = DAI;
//# sourceMappingURL=dai.js.map