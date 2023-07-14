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