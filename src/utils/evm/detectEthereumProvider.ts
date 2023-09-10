import { EthereumProvider, ethereum } from "../../interfaces";
import EtherConstants from '../../wallets/EthreumConstants'

/**
 * Checks an EthereumProvider availability
 * @param mustBeMetaMask flag whether isMetamask
 * @param timeout milliseconds to await, default 4000 (4 sec)
 * @returns null | EthereumProvider
 */
export function detectEthereumProvider<T = EthereumProvider>(
    mustBeMetaMask = false,
    timeout = 4000
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