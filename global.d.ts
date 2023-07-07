export {}; //The file is purely for type declarations and does not export any runtime code.

declare global {                // Auguments the global namespace in TS
    interface Window {          // Global browser object in JS
        ethereum: {             // EVM compatible wallet
            providers:          any;        // ethereum provider
            on:                 any;        // Event listener
            removeListener:     any;        // method
            isCoinbaseWallet?:  boolean;    // flag
            isMetaMask?:        boolean;    // flag
        };
    }
}