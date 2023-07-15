// import { ethers } from 'ethers';
// import WalletProvider from './WalletProvider.js';

// const anyWindow: any = (window as any);

// export default class CoinbaseWalletProvider extends WalletProvider {
//     private readonly deeplinkURL = `https://go.cb-w.com/dapp?cb_url=${window.location.href}`;

//     public async getWeb3Provider() {
//         let coinbaseProvider: any = anyWindow?.ethereum?.isCoinbaseWallet
//             ? anyWindow?.ethereum
//             : undefined;

//         if (anyWindow?.ethereum?.providers?.length) {
//             coinbaseProvider = anyWindow.ethereum.providers.find(
//                 (p: { isCoinbaseWallet: boolean; }) => p.isCoinbaseWallet
//             );
//         }

//         if (!coinbaseProvider) {
//             if (this.isMobile()) {
//                 this.deepLinkToWalletApp();

//                 return;
//             }
//         }

//         return new ethers.providers.Web3Provider(coinbaseProvider);
//     }

//     private deepLinkToWalletApp() {
//         window.open(this.deeplinkURL, '_blank');
//     }
// }