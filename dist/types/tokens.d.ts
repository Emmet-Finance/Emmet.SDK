import { mainnetTokens, testnetTokens } from '../tokens';
export type ContractAddress = {
    [key: string]: string;
};
export type SupportedTokenType = {
    address: ContractAddress;
    abi: any;
    decimals: number;
    logo: string;
    name: string;
    native: string;
};
export type TMainnetTokenNames = keyof typeof mainnetTokens;
export declare const MainnetTokenNames: TMainnetTokenNames[];
export type TTestnetTokenNames = keyof typeof testnetTokens;
export declare const TestnetTokenNames: TTestnetTokenNames[];
export type TSupportedTokenNames = TMainnetTokenNames | TTestnetTokenNames;
export declare const SupportedTokenNames: TSupportedTokenNames[];
export type TokenNameToAmount = {
    [key in TSupportedTokenNames]: string;
};
export type TokenBalanceObject = {
    [key: string]: string;
};
