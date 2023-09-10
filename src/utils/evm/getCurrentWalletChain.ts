/**
 * Tries to fetch the sellected browser wallet chainId
 * @returns A decimal chain ID
 */
export async function getCurrentWalletChain(): Promise<number> {
    try {

        // Check if MetaMask is installed and connected
        if (typeof window?.ethereum !== 'undefined') {
            // Retrieve the chain ID from MetaMask
            const chainIdHex: string = await window?.ethereum
                .request({ method: 'eth_chainId' });
            return parseInt(chainIdHex, 16);
        } else {
            console.error('getCurrentWalletChain Error: EVM Wallet is not installed.');
        }

    } catch (error) {
        console.error("getCurrentWalletChain Error:", error)
    }

    return 0;
}