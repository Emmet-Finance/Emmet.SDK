// import { Web3Provider } from '@ethersproject/providers';
// import { IWalletProvider } from '../interfaces/wallet.js';

// export default abstract class WalletProvider implements IWalletProvider {

//     abstract getWeb3Provider(): Promise<Web3Provider | undefined>;

//     public isMobile(): boolean {
//         return this.isAndroid() || this.isSmalliOS();
//     }

//     protected isAndroid(): boolean {
//         return (
//             typeof navigator !== 'undefined' &&
//             /android/i.test(navigator.userAgent)
//         );
//     }

//     private isSmalliOS(): boolean {
//         return (
//             typeof navigator !== 'undefined' &&
//             /iPhone|iPod/.test(navigator.userAgent)
//         );
//     }
// }