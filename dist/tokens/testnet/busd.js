"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const busd_1 = __importDefault(require("../../abi/busd"));
const tokens_1 = require("../../logos/tokens");
const BUSD = {
    abi: busd_1.default,
    decimals: "18",
    logo: tokens_1.LOGO_BUSD,
    name: "BUSD",
    native: {
        "address": "0x2991E99Df3EDD3F15962294A28b0aD1F4d56E07a",
        "chain": "goerly"
    },
    wrapped: [
        {
            "address": "0xeB7A36D0B2700851c370283c83f31CfC670bF933",
            "chain": "bscTestnet"
        },
        {
            "address": "0xCbD10d57EE3bc0088B3db30777E8b415C95f3747",
            "chain": "mumbai"
        },
        {
            "address": "0xbF99037F929222cc7C0aa67acd91A12f4782b96A",
            "chain": "sparknet"
        }
    ]
};
exports.default = BUSD;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbnMvdGVzdG5ldC9idXNkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQXNDO0FBQ3RDLCtDQUErQztBQUUvQyxNQUFNLElBQUksR0FBRztJQUNULEdBQUcsRUFBRSxjQUFRO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxJQUFJLEVBQUUsa0JBQVM7SUFDZixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRTtRQUNKLFNBQVMsRUFBRSw0Q0FBNEM7UUFDdkQsT0FBTyxFQUFFLFFBQVE7S0FDcEI7SUFDRCxPQUFPLEVBQUU7UUFDTDtZQUNJLFNBQVMsRUFBRSw0Q0FBNEM7WUFDdkQsT0FBTyxFQUFFLFlBQVk7U0FDeEI7UUFDRDtZQUNJLFNBQVMsRUFBRSw0Q0FBNEM7WUFDdkQsT0FBTyxFQUFFLFFBQVE7U0FDcEI7UUFDRDtZQUNJLFNBQVMsRUFBRSw0Q0FBNEM7WUFDdkQsT0FBTyxFQUFFLFVBQVU7U0FDdEI7S0FDSjtDQUNKLENBQUE7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==