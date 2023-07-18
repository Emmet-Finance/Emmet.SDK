import { LOGO_ETHEREUM } from '../logos/chains';
export const ethereum = {
    bridge: '',
    logo: LOGO_ETHEREUM,
    id: 1,
    network: 'homestead',
    name: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://eth-mainnet.g.alchemy.com/v2'],
            webSocket: ['wss://eth-mainnet.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://mainnet.infura.io/v3'],
            webSocket: ['wss://mainnet.infura.io/ws/v3'],
        },
        default: {
            http: ['https://ethereum.publicnode.com'],
        },
        public: {
            http: ["https://eth.llamarpc.com",
                "https://rpc.builder0x69.io",
                "https://ethereum.publicnode.com",
                "https://rpc.mevblocker.io",
                "https://rpc.payload.de"
            ],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
        },
        default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62',
            blockCreated: 16966585,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
        },
    },
    testnet: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoZXJldW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2hhaW5zL2V0aGVyZXVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUc7SUFFcEIsTUFBTSxFQUFFLEVBQUU7SUFDVixJQUFJLEVBQUUsYUFBYTtJQUVuQixFQUFFLEVBQUUsQ0FBQztJQUNMLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLElBQUksRUFBRSxVQUFVO0lBQ2hCLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO0lBQzlELE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxDQUFDLHNDQUFzQyxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ3BEO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLENBQUMsOEJBQThCLENBQUM7WUFDdEMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0M7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUM1QztRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxDQUFDLDBCQUEwQjtnQkFDN0IsNEJBQTRCO2dCQUM1QixpQ0FBaUM7Z0JBQ2pDLDJCQUEyQjtnQkFDM0Isd0JBQXdCO2FBQzNCO1NBQ0o7S0FDSjtJQUNELGNBQWMsRUFBRTtRQUNaLFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxXQUFXO1lBQ2pCLEdBQUcsRUFBRSxzQkFBc0I7U0FDOUI7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsV0FBVztZQUNqQixHQUFHLEVBQUUsc0JBQXNCO1NBQzlCO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxXQUFXLEVBQUU7WUFDVCxPQUFPLEVBQUUsNENBQTRDO1NBQ3hEO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDbEIsT0FBTyxFQUFFLDRDQUE0QztZQUNyRCxZQUFZLEVBQUUsUUFBUTtTQUN6QjtRQUNELFVBQVUsRUFBRTtZQUNSLE9BQU8sRUFBRSw0Q0FBNEM7WUFDckQsWUFBWSxFQUFFLFFBQVE7U0FDekI7S0FDSjtJQUNELE9BQU8sRUFBRSxLQUFLO0NBQ1csQ0FBQyJ9