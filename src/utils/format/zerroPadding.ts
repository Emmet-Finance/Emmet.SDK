/**
 * Zero-pads a string, number, or bigint to reach the desired target length.
 *
 * @param inputString The input string, number, or bigint to be zero-padded.
 * @param decimals The number of decimal places.
 * @param targetLength The target length for the resulting padded string.
 * @returns The input value zero-padded to the specified target length as a string.
 */
export function zerroPadding(
    inputString: string | number | bigint,
    decimals: string | number | bigint,
    targetLength: string | number | bigint
): string {
    // Cast the arguments to the expected types
    const s: string = BigInt(inputString).toString();
    const d: number = parseInt(BigInt(decimals).toString());
    const L: number = parseInt(BigInt(targetLength).toString());
    // Compute padding
    if (d > s.length) {
        const padding: string = '0'.repeat(d - s.length);
        // Return a padded string
        return `${padding}${s.slice(0, L)}`;
    } else {
        return s;
    }
}