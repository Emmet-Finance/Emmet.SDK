// /// <reference lib="webworker" />

// import { ethers } from 'ethers';
// import WalletProvider from './WalletProvider.js';

// const anyWindow: any = (window as any);

// export default class MetaMaskWalletProvider extends WalletProvider {
//     private readonly deeplinkURL = `https://metamask.app.link/dapp/${window.location.href}`;

//     private getEthereumProvider(): any | undefined {
//         if (typeof anyWindow.ethereum !== 'undefined' && anyWindow.ethereum?.isMetaMask) {
//           return anyWindow.ethereum;
//         }
    
//         if (
//           typeof anyWindow.ethereum !== 'undefined' &&
//           Array.isArray(anyWindow.ethereum.providers) &&
//           anyWindow.ethereum.providers.length > 0
//         ) {
//           return anyWindow.ethereum.providers.find((p: any) => p.isMetaMask);
//         }
    
//         return undefined;
//       }

//     public async getWeb3Provider(): Promise<ethers.providers.Web3Provider | undefined> {

//         let metamaskProvider: any = this.getEthereumProvider();

//         if (!metamaskProvider) {
//             if (this.isMobile()) {
//                 this.deepLinkToWalletApp();
//                 return;
//             }
//         }

//         return new ethers.providers.Web3Provider(metamaskProvider);
//     }

//     private deepLinkToWalletApp() {
//         window.open(this.deeplinkURL, '_blank');
//     }
// }