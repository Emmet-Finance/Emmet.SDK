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
    const times: number = L - s.length;
    const padding: string = times > 0 ? '0'.repeat(times) : '';
    // Return a padded string
    return `${padding}${s}`;
}