/**
 * Verifies validity of a potential EVM address
 * @param address a verified string
 * @returns `true` | `false`
 */
export function isEvmAddress(address: string): boolean {
    // Regular expression to match the EVM address format
    // Expected length 42 chars including `0x`
    // Can only contain hex chars 0-9 | a-f | A-F
    const evmAddressRegex = /^0x[a-fA-F0-9]{40}$/;

    // Test the address against the regex and return the result
    return evmAddressRegex.test(address);
}