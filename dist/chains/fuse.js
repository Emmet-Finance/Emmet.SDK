"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuse = void 0;
const chains_1 = require("../logos/chains");
exports.fuse = {
    bridge: '',
    logo: chains_1.LOGO_FUSE,
    id: 122,
    name: 'Fuse',
    network: 'fuse',
    nativeCurrency: { name: 'Fuse', symbol: 'FUSE', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.fuse.io'] },
        public: {
            http: [
                "https://fuse-mainnet.chainstacklabs.com",
                "https://rpc.fuse.io",
                "https://fuse-rpc.gateway.pokt.network",
                "https://fuse.api.onfinality.io/public"
            ]
        },
    },
    blockExplorers: {
        default: { name: 'Fuse Explorer', url: 'https://explorer.fuse.io' },
    },
    testnet: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFpbnMvZnVzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBNEM7QUFFL0IsUUFBQSxJQUFJLEdBQUc7SUFFaEIsTUFBTSxFQUFFLEVBQUU7SUFDVixJQUFJLEVBQUUsa0JBQVM7SUFFZixFQUFFLEVBQUUsR0FBRztJQUNQLElBQUksRUFBRSxNQUFNO0lBQ1osT0FBTyxFQUFFLE1BQU07SUFDZixjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUM5RCxPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1FBQzFDLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRTtnQkFDRix5Q0FBeUM7Z0JBQ3pDLHFCQUFxQjtnQkFDckIsdUNBQXVDO2dCQUN2Qyx1Q0FBdUM7YUFDMUM7U0FDSjtLQUNKO0lBQ0QsY0FBYyxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxHQUFHLEVBQUUsMEJBQTBCLEVBQUU7S0FDdEU7SUFDRCxPQUFPLEVBQUUsS0FBSztDQUNXLENBQUEifQ==