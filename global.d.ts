import { TEnvironment } from "./src/enums/environment.ts";

export {}; //The file is purely for type declarations and does not export any runtime code.

interface MetaMaskEthereumProvider { // Metamask Interface
    isMetaMask?: boolean;
    once?(eventName: string | symbol, listener: (...args: any[]) => void): this;
    on(eventName: string | symbol, listener: (...args: any[]) => void): this;
    off?(eventName: string | symbol, listener: (...args: any[]) => void): this;
    addListener?(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners?(event?: string | symbol): this;
  }

declare global {                // Auguments the global namespace in TS
    interface Window {          // Global browser object in JS
        ethereum: MetaMaskEthereumProvider & { // Metamask+ interface
            providers:          any;        // ethereum provider
            isCoinbaseWallet?:  boolean;    // flag
        };
    }

    interface Environment {     // Global Environment
        current: TEnvironment   // Mainnet | Testnet
    }
}

declare module '*.svg' {
    const content: string;
    export default content;
  }