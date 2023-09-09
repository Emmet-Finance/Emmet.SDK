import { SupportedTokenType } from '../types';
import { formatChainName } from './format';
import { testnetTokens, mainnetTokens } from '../tokens';

/**
 * Checks if a token is some blockchain's native coin.
 * 
 * @param token The token to check.
 * @returns `true` if the token is a native coin, `false` otherwise.
 */
export function isNativeCoin(token: SupportedTokenType): boolean {
    return token.address[token.native] === '';
}

/**
 * Checks if a token is the native coin of the specified chain.
 * 
 * @param token The token to check.
 * @param chainName The name of the examined chain.
 * @returns `true` if the token is the native coin of the chain, `false` otherwise.
 */
export function isThisChainsNativeCoin(
    token: string,
    chainName: string,
    network: 'testnet' | 'mainnet'
): boolean {
    const tokens = network === 'testnet'
        ? testnetTokens
        : mainnetTokens;
    const _token = tokens[token];
    return isNativeCoin(_token)
        && _token.native === formatChainName(chainName);
}