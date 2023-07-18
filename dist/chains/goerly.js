import { LOGO_ETHEREUM } from '../logos/chains';
export const goerli = {
    bridge: '0x52c5cF8d571b1c8cBF75b5f1bD088C1Dd4598bC7',
    logo: LOGO_ETHEREUM,
    id: 5,
    network: 'goerli',
    name: 'Goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://eth-goerli.g.alchemy.com/v2'],
            webSocket: ['wss://eth-goerli.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://goerli.infura.io/v3'],
            webSocket: ['wss://goerli.infura.io/ws/v3'],
        },
        default: {
            http: ['https://rpc.ankr.com/eth_goerli'],
        },
        public: {
            http: [
                "https://rpc.ankr.com/eth_goerli",
                "https://eth-goerli.public.blastapi.io",
                "https://goerli.blockpi.network/v1/rpc/public",
                "https://endpoints.omniatech.io/v1/eth/goerli/public"
            ],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Etherscan',
            url: 'https://goerli.etherscan.io',
        },
        default: {
            name: 'Etherscan',
            url: 'https://goerli.etherscan.io',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0x56522D00C410a43BFfDF00a9A569489297385790',
            blockCreated: 8765204,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6507670,
        },
    },
    testnet: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29lcmx5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NoYWlucy9nb2VybHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUVsQixNQUFNLEVBQUUsNENBQTRDO0lBQ3BELElBQUksRUFBRSxhQUFhO0lBRW5CLEVBQUUsRUFBRSxDQUFDO0lBQ0wsT0FBTyxFQUFFLFFBQVE7SUFDakIsSUFBSSxFQUFFLFFBQVE7SUFDZCxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtJQUNyRSxPQUFPLEVBQUU7UUFDTCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNuRDtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDNUM7UUFDRCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0YsaUNBQWlDO2dCQUNqQyx1Q0FBdUM7Z0JBQ3ZDLDhDQUE4QztnQkFDOUMscURBQXFEO2FBQ3hEO1NBQ0o7S0FDSjtJQUNELGNBQWMsRUFBRTtRQUNaLFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxXQUFXO1lBQ2pCLEdBQUcsRUFBRSw2QkFBNkI7U0FDckM7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsV0FBVztZQUNqQixHQUFHLEVBQUUsNkJBQTZCO1NBQ3JDO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxXQUFXLEVBQUU7WUFDVCxPQUFPLEVBQUUsNENBQTRDO1NBQ3hEO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDbEIsT0FBTyxFQUFFLDRDQUE0QztZQUNyRCxZQUFZLEVBQUUsT0FBTztTQUN4QjtRQUNELFVBQVUsRUFBRTtZQUNSLE9BQU8sRUFBRSw0Q0FBNEM7WUFDckQsWUFBWSxFQUFFLE9BQU87U0FDeEI7S0FDSjtJQUNELE9BQU8sRUFBRSxJQUFJO0NBQ1ksQ0FBQyJ9