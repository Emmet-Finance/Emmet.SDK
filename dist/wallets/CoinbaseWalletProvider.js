import { ethers } from 'ethers';
import WalletProvider from './WalletProvider.js';
export default class CoinbaseWalletProvider extends WalletProvider {
    constructor() {
        super(...arguments);
        this.deeplinkURL = `https://go.cb-w.com/dapp?cb_url=${window.location.href}`;
    }
    async getWeb3Provider() {
        let coinbaseProvider = window?.ethereum?.isCoinbaseWallet
            ? window?.ethereum
            : undefined;
        if (window?.ethereum?.providers?.length) {
            coinbaseProvider = window.ethereum.providers.find((p) => p.isCoinbaseWallet);
        }
        if (!coinbaseProvider) {
            if (this.isMobile()) {
                this.deepLinkToWalletApp();
                return;
            }
        }
        return new ethers.providers.Web3Provider(coinbaseProvider);
    }
    deepLinkToWalletApp() {
        window.open(this.deeplinkURL, '_blank');
    }
}
