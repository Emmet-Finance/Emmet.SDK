export type ContractAddress = {
    address: string;
    chain: string;
};
export type SupportedTokenType = {
    abi: string;
    decimals: number;
    logo: string;
    name: string;
    native: ContractAddress;
    wrapped: ContractAddress[];
};
