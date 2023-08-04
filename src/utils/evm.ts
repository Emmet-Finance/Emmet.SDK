import { EthereumProvider, window } from '../interfaces';
import EtherConstants, { MESSAGE_TYPE } from '../wallets/EthreumConstants';

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
            window.addEventListener(
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

            window.removeEventListener(EtherConstants.ETH_INITIALISED, handleEthereum);

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