"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dai_1 = __importDefault(require("../../abi/dai"));
const tokens_1 = require("../../logos/tokens");
const DAI = {
    address: {
        goerly: "0x3fcc5C26fAd6B8fC9461E1d6f920A3C96F15f40a",
        bsctestnet: "0x2AEaD32687aB9D18bb63248f94cD0ADA3ce45ce0",
        mumbai: "0xD55C04E15B9808bf3e561367D12f3B2dfAA55d48",
        sparknet: "0xe0157e7a2C90A88371b508aD5818715680010086",
    },
    abi: dai_1.default,
    decimals: 18,
    logo: tokens_1.LOGO_DAI,
    name: "DAI",
    native: "goerly"
};
exports.default = DAI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rva2Vucy90ZXN0bmV0L2RhaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFvQztBQUNwQywrQ0FBOEM7QUFHOUMsTUFBTSxHQUFHLEdBQXVCO0lBQzVCLE9BQU8sRUFBRTtRQUVMLE1BQU0sRUFBQyw0Q0FBNEM7UUFFbkQsVUFBVSxFQUFDLDRDQUE0QztRQUN2RCxNQUFNLEVBQUMsNENBQTRDO1FBQ25ELFFBQVEsRUFBQyw0Q0FBNEM7S0FDckM7SUFDcEIsR0FBRyxFQUFFLGFBQU87SUFDWixRQUFRLEVBQUUsRUFBRTtJQUNaLElBQUksRUFBRSxpQkFBUTtJQUNkLElBQUksRUFBRSxLQUFLO0lBQ1gsTUFBTSxFQUFFLFFBQVE7Q0FDbkIsQ0FBQTtBQUVELGtCQUFlLEdBQUcsQ0FBQyJ9