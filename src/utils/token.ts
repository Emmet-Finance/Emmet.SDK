import { SupportedTokenType } from '../types';
import { formatChainName } from './format';

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
    token: SupportedTokenType,
    chainName: string
): boolean {
    return isNativeCoin(token)
        && token.native === formatChainName(chainName);
}