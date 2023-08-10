"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bsc = void 0;
const chains_1 = require("../logos/chains");
exports.bsc = {
    bridge: '',
    logo: chains_1.LOGO_BSC,
    id: 56,
    name: 'BNB Smart Chain',
    network: 'bsc',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB',
    },
    rpcUrls: {
        default: { http: ['https://bsc-dataseed.binance.org'] },
        public: {
            http: ["https://bsc-dataseed.binance.org",
                "https://bsc-dataseed1.ninicoin.io",
                "https://bscrpc.com",
                "https://bsc-dataseed1.ninicoin.io",
                "https://bsc-dataseed2.ninicoin.io",
                "https://bsc-dataseed3.ninicoin.io",
                "https://bsc-dataseed4.ninicoin.io",
                "https://bsc-dataseed1.defibit.io",
                "https://bsc-dataseed2.defibit.io",
                "https://bsc-dataseed3.defibit.io"]
        },
    },
    blockExplorers: {
        etherscan: { name: 'BscScan', url: 'https://bscscan.com' },
        default: { name: 'BscScan', url: 'https://bscscan.com' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15921452,
        },
    },
    testnet: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NoYWlucy9ic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNENBQTJDO0FBRTlCLFFBQUEsR0FBRyxHQUFhO0lBRXpCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxFQUFFLGlCQUFRO0lBRWQsRUFBRSxFQUFFLEVBQUU7SUFDTixJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsY0FBYyxFQUFFO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsa0NBQWtDLENBQUMsRUFBRTtRQUN2RCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsQ0FBQyxrQ0FBa0M7Z0JBQ3JDLG1DQUFtQztnQkFDbkMsb0JBQW9CO2dCQUNwQixtQ0FBbUM7Z0JBQ25DLG1DQUFtQztnQkFDbkMsbUNBQW1DO2dCQUNuQyxtQ0FBbUM7Z0JBQ25DLGtDQUFrQztnQkFDbEMsa0NBQWtDO2dCQUNsQyxrQ0FBa0MsQ0FBQztTQUMxQztLQUNKO0lBQ0QsY0FBYyxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUU7UUFDMUQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUU7S0FDM0Q7SUFDRCxTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUU7WUFDUixPQUFPLEVBQUUsNENBQTRDO1lBQ3JELFlBQVksRUFBRSxRQUFRO1NBQ3pCO0tBQ0o7SUFDRCxPQUFPLEVBQUUsS0FBSztDQUNSLENBQUMifQ==