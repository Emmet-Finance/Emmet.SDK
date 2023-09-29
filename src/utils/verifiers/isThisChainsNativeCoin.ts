import { mainnetTokens, testnetTokens } from "../../tokens";
import { formatChainName } from "../format";
import { isNativeCoin } from "../verifiers";

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
    const tokens: any = network === 'testnet'
        ? testnetTokens
        : mainnetTokens;
    const _token = tokens[token];
    const isNative = isNativeCoin(_token)
    const tokenNative = _token.native === formatChainName(chainName)
    return isNative && tokenNative;
}