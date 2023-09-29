"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usdt_1 = __importDefault(require("../../abi/usdt"));
const tokens_1 = require("../../logos/tokens");
const USDT = {
    address: {
        goerli: "0x291E558C60FB567087D9b87bd62b84Af67b9a376",
        bsctestnet: "0x65329f02eb198478E18212253B186D9e1AFA04f9",
        mumbai: "0xB44e023C1ec38ee5E4205A3AA07671aF9cF3Cb01",
        sparknet: "0x59805ca29E5217b4Ce8cb48e57F9C7EcF0D5604F",
        athens3: "0xd2cD72Ee3FbBf8fcbCCB7E8dB70220450F125AA6",
        basegoerli: "0xd2cD72Ee3FbBf8fcbCCB7E8dB70220450F125AA6",
        lineatestnet: "0x3210D94CE1447BA7Eb36947064c403F032Bc2a84"
    },
    abi: usdt_1.default,
    decimals: 18,
    logo: tokens_1.LOGO_USDT,
    name: "USDT",
    native: "goerli"
};
exports.default = USDT;
//# sourceMappingURL=usdt.js.map