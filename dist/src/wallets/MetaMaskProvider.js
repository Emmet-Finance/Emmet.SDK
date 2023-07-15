import { ethers } from 'ethers';
import WalletProvider from './WalletProvider.js';
export default class MetaMaskWalletProvider extends WalletProvider {
    constructor() {
        super(...arguments);
        this.deeplinkURL = `https://metamask.app.link/dapp/${window.location.href}`;
    }
    async getWeb3Provider() {
        let metamaskProvider = window?.ethereum?.isMetaMask
            ? window?.ethereum
            : undefined;
        if (window?.ethereum?.providers?.length) {
            metamaskProvider = window.ethereum.providers.find((p) => p.isMetaMask);
        }
        if (!metamaskProvider) {
            if (this.isMobile()) {
                this.deepLinkToWalletApp();
                return;
            }
        }
        return new ethers.providers.Web3Provider(metamaskProvider);
    }
    deepLinkToWalletApp() {
        window.open(this.deeplinkURL, '_blank');
    }
}
