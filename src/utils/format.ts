

/**
 * Converts a bigint or string * decimals
 * @param n an amount to be converted
 * @param decimals places after period
 * @returns an integer or a float as string
 */
export function bigIntToHuman(
    n: string | number | bigint | undefined,
    decimals: string | number | bigint = 18n
): string {

    if (n && decimals) {
        let cleaned: string | number | bigint | boolean;
        let whole, fraction: string | number | bigint;
        let divider: bigint = typeof decimals === 'string'
            ? 10n ** BigInt(parseInt(decimals))
            : 10n ** BigInt(decimals);


        switch (typeof n) {
            case 'string':
                cleaned = n.replace(/[^0-9.]/g, '');
                [whole, fraction] = cleaned.split('.')
                if (!fraction) { fraction = '' }
                const intger = BigInt(whole + fraction) / divider;
                fraction = BigInt(whole + fraction) % divider;
                whole = intger;
                break;
            case 'number':
                whole = parseInt(n.toString());
                fraction = (parseFloat(n.toString()) - whole)
                    .toString()
                    .split('.')[1]
                fraction = parseInt(fraction) > 0 ? parseInt(fraction) : 0;
                break;
            case 'bigint':
                whole = BigInt(n) / divider;
                fraction = BigInt(n) % divider;
                break;
        }

        if (fraction) {
            const formattedFractionalPart = formatFractionalPart(fraction.toString());
            return `${whole.toLocaleString()}.${formattedFractionalPart}`
        } else {
            return whole.toLocaleString();
        }

    } else {
        return ''
    }
}


/**
 * Formats a chain name to match hashmap keys
 * @param chainName a chain name to be formatted
 * @returns a loercased chain name without spaces
 */
export function formatChainName(chainName: string): string {
    if (chainName) {
        return formatChainNameMixedCase(chainName).toLowerCase();
    }
    return '';
}

export function formatChainNameMixedCase(chainName: string): string {
    if (chainName) {
        return chainName.replace(/[^a-zA-Z0-9]/g, '')
    }
    return '';
}

export function chainNameToKey<T>(chainName: string): T {

    return (formatChainName(chainName) as unknown) as T;

}


/**
 * Removes the trailing insignificant zeros
 * @param fraction the fractional part of a number
 * @returns a fractional number without insignificant zeros
 * 
 * Example:
 * ```ts
 * const formatted: string = formatFractionalPart("123.4560700")
 * ```
 * 
 * Returns: `123.45607`
 */
export function formatFractionalPart(fraction: string): string {
    if (fraction) {
        let lastSignificant = -1;
        for (let i = fraction.length - 1; i >= 0; i--) {
            if (fraction[i] !== '0') {
                lastSignificant = i;
                break;
            }
        }
        // Find the index of the last non-zero digit in the fractional part
        const lastNonZeroIndex = lastSignificant >= 0
            ? lastSignificant + 1 : 0;
        [...fraction].reverse().findIndex(char => char !== '0');
        // Construct the formatted number with the determined significant digits
        const formattedFractionalPart = fraction.substring(0, lastNonZeroIndex);
        return formattedFractionalPart;
    } else {
        return '';
    }
}