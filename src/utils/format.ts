

/**
 * Convert a hexadecimal string to a decimal string.
 * 
 * @param {string} s The hexadecimal string to convert.
 * @returns {string} The decimal representation of the hexadecimal string.
 * 
 * @example
 * ```js
 * const hexadecimalString = "0x89f8e091e5e80d5";
 * const decimalString = hexToDecimalString(hexadecimalString);
 * console.log(`Hexadecimal: ${hexadecimalString}`);
 * console.log(`Decimal: ${decimalString}`);
 * // Output:
 * // Hexadecimal: 0x89f8e091e5e80d5
 * // Decimal: 621371443415777493
 * ```
 */
function hexToDecimalString(s: string): string {

    // Define a mapping from hexadecimal characters to decimal values
    const hexToDecimalMap: Record<string, string> = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        'a': '10',
        'b': '11',
        'c': '12',
        'd': '13',
        'e': '14',
        'f': '15',
    };

    // Remove the '0x' prefix if it exists
    let hexString: string = s.startsWith('0x')
        ? s.slice(2)
        : s;

    let decimalValue = '0';

    // Iterate through the hexadecimal string from right to left
    for (let i = hexString.length - 1; i >= 0; i--) {
        const hexDigit = hexString[i].toLowerCase();
        const decimalDigit = hexToDecimalMap[hexDigit];
        if (decimalDigit === undefined) {
            throw new Error(`Invalid hexadecimal character: ${hexDigit}`);
        }
        const powerOf16 = BigInt(hexString.length - 1 - i);
        const digitValue = BigInt(decimalDigit);
        decimalValue = (BigInt(decimalValue) + digitValue * (16n ** powerOf16)).toString();
    }

    return decimalValue;
}

/**
 * Check if a given string is a valid hexadecimal string with or without the '0x' prefix.
 * @param s The string to check.
 * @returns True if the string is a valid hexadecimal string, false otherwise.
 * 
 * @example
 * ```ts
 * console.log(isHexString("0x89f8e091e5e80d5")); // true
 * console.log(isHexString("89f8e091e5e80d5"));  // true
 * console.log(isHexString("123XYZ"));           // false
 * ```
 */
function isHexString(s: any): boolean {
    // Check if the input is a string
    if (!s || typeof s !== 'string') return false;

    // Define a regular expression pattern for a hexadecimal string
    const hexadecimalRegex = /^0x[0-9A-Fa-f]+$/g;

    // Test if the string matches the pattern
    return hexadecimalRegex.test(s);
}

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
                if (isHexString(n)) {
                    cleaned = hexToDecimalString(n);
                } else {
                    cleaned = n.replace(/[^0-9.]/g, '');
                }
                [whole, fraction] = cleaned.split('.')

                if (!fraction) {
                    fraction = ''
                    const intger = BigInt(whole + fraction) / divider;
                    fraction = BigInt(whole + fraction) % divider;
                    whole = intger;
                }
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
        console.log("whole", whole, "fraction", fraction)

        if (fraction) {
            const formattedFractionalPart = formatFractionalPart(zerroPadding(fraction, decimals));
            return `${whole.toLocaleString()}.${formattedFractionalPart}`
        } else {
            return whole.toLocaleString();
        }

    } else {
        return ''
    }
}


/**
 * Zero-pads a string, number, or bigint to reach the desired target length.
 *
 * @param inputString The input string, number, or bigint to be zero-padded.
 * @param targetLength The target length for the resulting padded string.
 * @returns The input value zero-padded to the specified target length as a string.
 */
export function zerroPadding(
    inputString: string | number | bigint,
    targetLength: string | number | bigint
): string {
    // Cast the arguments to the expected types
    const s: string = BigInt(inputString).toString();
    const L: number = parseInt(BigInt(targetLength).toString());
    // Compute padding
    const padding: string = '0'.repeat(L - s.length);
    // Return a padded string
    return `${padding}${s}`;
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