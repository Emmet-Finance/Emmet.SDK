import { mainnetTokens, testnetTokens } from '../tokens';

/**
 * Contract address type
 */
export type ContractAddress = {
    address:string,
    chain:string
}

/**
 * Type defining a supported token structure
 */
export type SupportedTokenType = {
    abi:string, // Native contract ABI
    decimals: number,
    logo: string,
    name: string,
    native: ContractAddress,
    wrapped: ContractAddress[]
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