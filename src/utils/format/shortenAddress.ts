/**
 * Shortens a cryptocurrency address by replacing the middle portion with an ellipsis.
 *
 * @param {string} address - The full cryptocurrency address to be shortened.
 * @param {number} first - The number of characters to keep from the beginning of the address (default: 6).
 * @param {number} last - The number of characters to keep from the end of the address (default: 6).
 * @returns {string} - The shortened address with the specified number of characters at the beginning and end, separated by an ellipsis.
 */
export function shortenAddress(address: string, first: number = 6, last: number = 6) {
    const length = 42;

    // Check for invalid input and edge cases.
    if (!address || first < 0 || last < 0 || last > length) {
        return '';
    }

    // If the requested characters to keep from the beginning are more than the address length,
    // return the original address.
    if (first >= length) {
        return address;
    }

    // Shorten the address by replacing the middle part with an ellipsis ('…').
    return `${address.slice(0, first)}…${address.slice(length - last, length)}`;
}