import { mainnetTokens, testnetTokens } from '../tokens';

/**
 * Contract address type
 */
export type ContractAddress = {[key: string]: string}

/**
 * Type defining a supported token structure
 */
export type SupportedTokenType = {
    address: ContractAddress,
    abi:any, // Native contract ABI
    decimals: number,
    logo: string,
    name: string,
    native: string
}

/**
 * Type restricting token names
 */
export type TMainnetTokenNames = keyof typeof mainnetTokens;

/**
 * Array of Mainnet token names
 */
export const MainnetTokenNames: TMainnetTokenNames[] = Object.keys(mainnetTokens) as TMainnetTokenNames[];

/**
 * Type restricting token names
 */
export type TTestnetTokenNames = keyof typeof testnetTokens;

/**
 * Array of testnet token names
 */
export const TestnetTokenNames: TTestnetTokenNames[] = Object.keys(testnetTokens) as TTestnetTokenNames[]

/**
 * Union type combining all the supported names
 */
export type TSupportedTokenNames = TMainnetTokenNames | TTestnetTokenNames;

/**
 * An array of all supported tokens
 */
export const SupportedTokenNames: TSupportedTokenNames[] = MainnetTokenNames && TestnetTokenNames ;

/**
 * Hashmap {TOKEN_NAME: amount as string}
 */
export type TokenNameToAmount = {
    [key in TSupportedTokenNames]: string;
};

export type TokenBalanceObject = { [key: string]: string };