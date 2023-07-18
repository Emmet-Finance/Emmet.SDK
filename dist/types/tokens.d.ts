import { mainnetTokens, testnetTokens } from '../tokens';
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
export type TMainnetTokenNames = keyof typeof mainnetTokens;
export declare const MainnetTokenNames: TMainnetTokenNames[];
export type TTestnetTokenNames = keyof typeof testnetTokens;
export declare const TestnetTokenNames: TTestnetTokenNames[];
