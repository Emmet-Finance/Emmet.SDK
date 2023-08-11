import { ALL_CHAINS } from '../chains';
import { EthereumProvider } from '../interfaces';
import { EVMChain } from '../types';
import EtherConstants, { MESSAGE_TYPE } from '../wallets/EthreumConstants';

// Ensure that the 'window' object is available in the browser environment
const window = typeof globalThis !== 'undefined' ? globalThis.window : null;

let ethereum: EthereumProvider | undefined;

if (window && window.ethereum) {
    ethereum = window.ethereum;
}


/**
 * Checks an EthereumProvider availability
 * @param mustBeMetaMask flag whether isMetamask
 * @param timeout milliseconds to await, default 3000 (3 sec)
 * @returns null | EthereumProvider
 */
export function detectEthereumProvider<T = EthereumProvider>(
    mustBeMetaMask = false,
    timeout = 3000
): Promise<T | null> {

    let handled = false;

    return new Promise(resolve => {

        if (ethereum) {
            handleEthereum();
        } else {
            window?.addEventListener(
                EtherConstants.ETH_INITIALISED,
                handleEthereum,
                { once: true },
            );

            setTimeout(() => {
                handleEthereum();
            }, timeout);
        }

        function handleEthereum() {
            if (handled) {
                return;
            }
            handled = true;

            window?.removeEventListener(EtherConstants.ETH_INITIALISED, handleEthereum);

            if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {
                resolve(ethereum as unknown as T)
            } else {

                const message = mustBeMetaMask && ethereum
                    ? 'Non-MetaMask window.ethereum detected.'
                    : 'Unable to detect window.ethereum.';

                console.error(message);
                resolve(null);
            }
        }

    })
}


/**
 * Extracts EVM accounts from the wallet provider
 * @returns an array of EVM accounts or []
 */
export async function getEvmAccounts(): Promise<string[]> {
    try {
        if (ethereum) {
            const accounts: string[] = await ethereum?.request<string[]>({
                method: MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS,
            }) as string[];

            if (accounts) return accounts;
        }
    } catch (error) {
        throw new Error("Failed to get EVM accounts");
    }
    return [];
}


/**
 * Checks a user native coin balance (ex. ETH, BNB, etc.)
 * @param account an EVM account whose balance we check
 * @returns an empty string or a hex encoded balance (ex. 0x12345)
 */
export async function getEvmBalance(account: string): Promise<string> {
    try {
        if (ethereum) {
            const response = await ethereum?.request<string>({
                method: EtherConstants.ETH_GET_BALANCE,
                params: [account, "latest"],
            }) as string;
            if (response) return response
        }
    } catch (error) {
        throw new Error("Failed to get the native coin balance");
    }
    return "";
}


/**
 * Extracts EVM chainId from the wallet provider
 * @returns an empty string or a hex encoded chainId (ex. 0x12345)
 */
export async function getEvmChainId(): Promise<string> {
    try {
        if (ethereum) {
            const chainid: string = await ethereum?.request<string>({
                method: EtherConstants.ETH_CHAIN_ID
            }) as string;
            if (chainid) return chainid;
        }
    } catch (error) {
        throw new Error("Failed to get the current chain ID");
    }
    return "";
}


/**
 * Formats a chain name to match hashmap keys
 * @param chainName a chain name to be formatted
 * @returns a loercased chain name without spaces
 */
export function formatChainName(chainName: string): string {
    if(chainName){
        return chainName.toLowerCase().replace(' ', '');
    }else{
        return "";
    }
}


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


/**
 * Switches or adds a new chain to the wallet
 * @param chainName a new chain name
 * @param newChain a new chain
 */
export async function switchEvmChain(chainName: string) {

    // Format the chain name to mathc the keys
    const formattedName = formatChainName(chainName) as keyof typeof ALL_CHAINS;
    // Extract the required chain
    const newChain: EVMChain = ALL_CHAINS[formattedName];
    // Extract the chain Id & convert to 0x-prefixed hexadecimal
    const chainId: string = `0x${newChain.id.toString(16)}`

    try {
        // Try switching the chain
        await window?.ethereum?.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId }],
        });

    } catch (switchError: any) {
        // If the chain does not exist let's add it
        if (switchError && switchError.code === 4902) {

            try {
                // Try adding a new chain to the wallet
                await window?.ethereum?.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: newChain.id,
                            chainName: newChain.name,
                            rpcUrls: newChain.rpcUrls,
                        },
                    ],
                });
            } catch (addError: any) {

                if (addError.code === 4001) {
                    console.error("User rejected chain addition.");
                } else {
                    // Unexpected error, let's see it
                    console.error("Failed to add new chain:", addError);
                }
            }
        }
    }
}