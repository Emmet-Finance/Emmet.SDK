import { LOGO_BSC } from '../logos/chains';
export const bsc = {
    bridge: '',
    logo: LOGO_BSC,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NoYWlucy9ic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRztJQUVmLE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxFQUFFLFFBQVE7SUFFZCxFQUFFLEVBQUUsRUFBRTtJQUNOLElBQUksRUFBRSxpQkFBaUI7SUFDdkIsT0FBTyxFQUFFLEtBQUs7SUFDZCxjQUFjLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFFO1FBQ3ZELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxDQUFDLGtDQUFrQztnQkFDckMsbUNBQW1DO2dCQUNuQyxvQkFBb0I7Z0JBQ3BCLG1DQUFtQztnQkFDbkMsbUNBQW1DO2dCQUNuQyxtQ0FBbUM7Z0JBQ25DLG1DQUFtQztnQkFDbkMsa0NBQWtDO2dCQUNsQyxrQ0FBa0M7Z0JBQ2xDLGtDQUFrQyxDQUFDO1NBQzFDO0tBQ0o7SUFDRCxjQUFjLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRTtRQUMxRCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRTtLQUMzRDtJQUNELFNBQVMsRUFBRTtRQUNQLFVBQVUsRUFBRTtZQUNSLE9BQU8sRUFBRSw0Q0FBNEM7WUFDckQsWUFBWSxFQUFFLFFBQVE7U0FDekI7S0FDSjtJQUNELE9BQU8sRUFBRSxLQUFLO0NBQ1csQ0FBQyJ9