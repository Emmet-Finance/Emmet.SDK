"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usdt_1 = __importDefault(require("../../abi/usdt"));
const tokens_1 = require("../../logos/tokens");
const USDT = {
    abi: usdt_1.default,
    decimals: "18",
    logo: tokens_1.LOGO_USDT,
    name: "USDT",
    native: {
        "address": "0x291E558C60FB567087D9b87bd62b84Af67b9a376",
        "chain": "goerly"
    },
    wrapped: [
        {
            "address": "0x65329f02eb198478E18212253B186D9e1AFA04f9",
            "chain": "bscTestnet"
        },
        {
            "address": "0xB44e023C1ec38ee5E4205A3AA07671aF9cF3Cb01",
            "chain": "mumbai"
        },
        {
            "address": "0x59805ca29E5217b4Ce8cb48e57F9C7EcF0D5604F",
            "chain": "sparknet"
        }
    ]
};
exports.default = USDT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNkdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbnMvdGVzdG5ldC91c2R0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQXNDO0FBQ3RDLCtDQUErQztBQUUvQyxNQUFNLElBQUksR0FBRztJQUNULEdBQUcsRUFBRSxjQUFRO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxJQUFJLEVBQUUsa0JBQVM7SUFDZixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRTtRQUNKLFNBQVMsRUFBRSw0Q0FBNEM7UUFDdkQsT0FBTyxFQUFFLFFBQVE7S0FDcEI7SUFDRCxPQUFPLEVBQUU7UUFDTDtZQUNJLFNBQVMsRUFBRSw0Q0FBNEM7WUFDdkQsT0FBTyxFQUFFLFlBQVk7U0FDeEI7UUFDRDtZQUNJLFNBQVMsRUFBRSw0Q0FBNEM7WUFDdkQsT0FBTyxFQUFFLFFBQVE7U0FDcEI7UUFDRDtZQUNJLFNBQVMsRUFBRSw0Q0FBNEM7WUFDdkQsT0FBTyxFQUFFLFVBQVU7U0FDdEI7S0FDSjtDQUNKLENBQUE7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==