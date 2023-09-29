
/**
 * Get the Ethereum provider object, typically associated with the MetaMask extension.
 *
 * @returns {any} - The Ethereum provider object, or `undefined` if not found.
 */
export function getMetamaskProvider() {

    let ethereum = (window as any).ethereum;
    let _tempEthereum: any;

    // Check if the `ethereum` object has a `providerMap`, which is commonly used by MetaMask.
    if (ethereum.providerMap) {
        // Iterate through the `providerMap` records to find the entry with the key 'MetaMask'.
        for (const record of ethereum.providerMap) {
            if (record[0] === 'MetaMask') {
                _tempEthereum = record[1]
            }
        }
    }

    // If a MetaMask provider is found, use it as the Ethereum provider.
    if (_tempEthereum) { ethereum = _tempEthereum }

    return ethereum;
}