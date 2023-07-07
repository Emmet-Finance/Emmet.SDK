export {};

declare global {
    interface Window {
        ethereum: {
            providers: any;
            on: any;
            removeListener: any;
            isCoinbaseWallet?: boolean;
            isMetaMask?: boolean;
        };
    }
}