"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polygon = void 0;
const chains_1 = require("../logos/chains");
exports.polygon = {
    bridge: '',
    logo: chains_1.LOGO_POLYGON,
    id: 137,
    name: 'Polygon',
    network: 'matic',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://polygon-mainnet.g.alchemy.com/v2'],
            webSocket: ['wss://polygon-mainnet.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://polygon-mainnet.infura.io/v3'],
            webSocket: ['wss://polygon-mainnet.infura.io/ws/v3'],
        },
        default: {
            http: ['https://polygon.llamarpc.com'],
        },
        public: {
            http: ["https://polygon.llamarpc.com",
                "https://poly-rpc.gateway.pokt.network",
                "https://rpc-mainnet.matic.quiknode.pro",
                "https://polygon-rpc.com",
                "https://matic-mainnet.chainstacklabs.com",
                "https://poly-rpc.gateway.pokt.network",
                "https://polygon-bor.publicnode.com"],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
        },
        default: {
            name: 'PolygonScan',
            url: 'https://polygonscan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
        },
    },
    testnet: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFpbnMvcG9seWdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0Q0FBK0M7QUFFbEMsUUFBQSxPQUFPLEdBQWE7SUFFN0IsTUFBTSxFQUFFLEVBQUU7SUFDVixJQUFJLEVBQUUscUJBQVk7SUFFbEIsRUFBRSxFQUFFLEdBQUc7SUFDUCxJQUFJLEVBQUUsU0FBUztJQUNmLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQ2hFLE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxDQUFDLDBDQUEwQyxDQUFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO1NBQ3hEO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLENBQUMsc0NBQXNDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUN6QztRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxDQUFDLDhCQUE4QjtnQkFDakMsdUNBQXVDO2dCQUN2Qyx3Q0FBd0M7Z0JBQ3hDLHlCQUF5QjtnQkFDekIsMENBQTBDO2dCQUMxQyx1Q0FBdUM7Z0JBQ3ZDLG9DQUFvQyxDQUFDO1NBQzVDO0tBQ0o7SUFDRCxjQUFjLEVBQUU7UUFDWixTQUFTLEVBQUU7WUFDUCxJQUFJLEVBQUUsYUFBYTtZQUNuQixHQUFHLEVBQUUseUJBQXlCO1NBQ2pDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLGFBQWE7WUFDbkIsR0FBRyxFQUFFLHlCQUF5QjtTQUNqQztLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsVUFBVSxFQUFFO1lBQ1IsT0FBTyxFQUFFLDRDQUE0QztZQUNyRCxZQUFZLEVBQUUsUUFBUTtTQUN6QjtLQUNKO0lBQ0QsT0FBTyxFQUFDLEtBQUs7Q0FDUCxDQUFDIn0=