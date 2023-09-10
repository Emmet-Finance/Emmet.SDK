import { SupportedTokenType } from "../../types";


/**
 * Checks if a token is some blockchain's native coin.
 * 
 * @param token The token to check.
 * @returns `true` if the token is a native coin, `false` otherwise.
 */
export function isNativeCoin(token: SupportedTokenType): boolean {
    return token.address[token.native] === '';
}