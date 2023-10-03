"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const busd_1 = __importDefault(require("../../abi/busd"));
const tokens_1 = require("../../logos/tokens");
const BUSD = {
    address: {
        goerli: "0x2991E99Df3EDD3F15962294A28b0aD1F4d56E07a",
        bsctestnet: "0xeB7A36D0B2700851c370283c83f31CfC670bF933",
        mumbai: "0xCbD10d57EE3bc0088B3db30777E8b415C95f3747",
        sparknet: "0xbF99037F929222cc7C0aa67acd91A12f4782b96A",
        athens3: "0x4D2E1a2Dd8fd4F60295d4F46F3B783dC5b5570F3",
        basegoerli: "0xF59bbE6673F8716879ad60bb961f717C718dbF90",
        lineatestnet: "0xA0C581aA8656277Fa390b0a234C7738514c99949",
        shardeumbetanet: "0x4d2e1a2dd8fd4f60295d4f46f3b783dc5b5570f3",
    },
    abi: busd_1.default,
    decimals: 18,
    logo: tokens_1.LOGO_BUSD,
    name: "BUSD",
    native: "goerli"
};
exports.default = BUSD;
//# sourceMappingURL=busd.js.map