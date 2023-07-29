import { LOGO_BSC } from '../logos/chains';
export const bscTestnet = {
    bridge: '0x8c1f71AcE61b152bD2224736813410aD690F68cD',
    logo: LOGO_BSC,
    id: 97,
    name: 'BSC Testnet',
    network: 'bsc-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: { http: ['https://bsc-testnet.publicnode.com'] },
        public: {
            http: [
                "https://bsc-testnet.publicnode.com",
                "https://endpoints.omniatech.io/v1/bsc/testnet/public",
                "https://data-seed-prebsc-2-s1.binance.org:8545",
                "https://data-seed-prebsc-1-s3.binance.org:8545",
                "https://data-seed-prebsc-2-s3.binance.org:8545",
                "https://data-seed-prebsc-1-s1.binance.org:8545",
                "https://data-seed-prebsc-1-s2.binance.org:8545",
                "https://data-seed-prebsc-2-s2.binance.org:8545",
                "https://bsctestapi.terminet.io/rpc"
            ]
        },
    },
    blockExplorers: {
        etherscan: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
        default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483,
        },
    },
    testnet: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnNjVGVzdG5ldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGFpbnMvYnNjVGVzdG5ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHO0lBRXRCLE1BQU0sRUFBRSw0Q0FBNEM7SUFDcEQsSUFBSSxFQUFFLFFBQVE7SUFFZCxFQUFFLEVBQUUsRUFBRTtJQUNOLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLGNBQWMsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsTUFBTTtLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7UUFDekQsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFO2dCQUNGLG9DQUFvQztnQkFDcEMsc0RBQXNEO2dCQUN0RCxnREFBZ0Q7Z0JBQ2hELGdEQUFnRDtnQkFDaEQsZ0RBQWdEO2dCQUNoRCxnREFBZ0Q7Z0JBQ2hELGdEQUFnRDtnQkFDaEQsZ0RBQWdEO2dCQUNoRCxvQ0FBb0M7YUFDdkM7U0FDSjtLQUNKO0lBQ0QsY0FBYyxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsNkJBQTZCLEVBQUU7UUFDbEUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsNkJBQTZCLEVBQUU7S0FDbkU7SUFDRCxTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUU7WUFDUixPQUFPLEVBQUUsNENBQTRDO1lBQ3JELFlBQVksRUFBRSxRQUFRO1NBQ3pCO0tBQ0o7SUFDRCxPQUFPLEVBQUUsSUFBSTtDQUNZLENBQUMifQ==