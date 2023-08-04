"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dai_1 = __importDefault(require("../../abi/dai"));
const tokens_1 = require("../../logos/tokens");
const DAI = {
    abi: dai_1.default,
    decimals: "18",
    logo: tokens_1.LOGO_DAI,
    name: "DAI",
    native: {
        "address": "0x3fcc5C26fAd6B8fC9461E1d6f920A3C96F15f40a",
        "chain": "goerly"
    },
    wrapped: [
        {
            "address": "0x2AEaD32687aB9D18bb63248f94cD0ADA3ce45ce0",
            "chain": "bscTestnet"
        },
        {
            "address": "0xD55C04E15B9808bf3e561367D12f3B2dfAA55d48",
            "chain": "mumbai"
        },
        {
            "address": "0xe0157e7a2C90A88371b508aD5818715680010086",
            "chain": "sparknet"
        }
    ]
};
exports.default = DAI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rva2Vucy90ZXN0bmV0L2RhaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFvQztBQUNwQywrQ0FBOEM7QUFFOUMsTUFBTSxHQUFHLEdBQUc7SUFDUixHQUFHLEVBQUUsYUFBTztJQUNaLFFBQVEsRUFBRSxJQUFJO0lBQ2QsSUFBSSxFQUFFLGlCQUFRO0lBQ2QsSUFBSSxFQUFFLEtBQUs7SUFDWCxNQUFNLEVBQUU7UUFDSixTQUFTLEVBQUUsNENBQTRDO1FBQ3ZELE9BQU8sRUFBRSxRQUFRO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ0w7WUFDSSxTQUFTLEVBQUUsNENBQTRDO1lBQ3ZELE9BQU8sRUFBRSxZQUFZO1NBQ3hCO1FBQ0Q7WUFDSSxTQUFTLEVBQUUsNENBQTRDO1lBQ3ZELE9BQU8sRUFBRSxRQUFRO1NBQ3BCO1FBQ0Q7WUFDSSxTQUFTLEVBQUUsNENBQTRDO1lBQ3ZELE9BQU8sRUFBRSxVQUFVO1NBQ3RCO0tBQ0o7Q0FDSixDQUFBO0FBRUQsa0JBQWUsR0FBRyxDQUFDIn0=