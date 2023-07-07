export type ContractAddress = {
    address:string,
    chain:string
}

export type SupportedTokenType = {
    abi:string, // Native contract ABI
    decimals: number,
    logo: string,
    name: string,
    native: ContractAddress,
    wrapped: ContractAddress[]
}

export type EVMChain = {
    bridge: string,
    chainName: string,
    chainId: string | number,
    explorer: string,
    logo:string,
    nativeCurrency: {
        name: string,
        symbol: string,
        decimals: string | number
    },
    rpcUrls: string[]
}