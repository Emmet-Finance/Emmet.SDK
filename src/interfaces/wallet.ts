export interface IConnectedWallet {
    isConnected: boolean;
    address?: string;
    balance?: {
        value: string;
        formatted: string;
    };
}

export interface RequestArguments {
    method: string;
    params?: any[];
}

export interface EthereumProvider {
    isMetaMask?: boolean;
    isCoinBase?: boolean;
    once(eventName: string | symbol, listener: (...args: any[]) => void): this;
    on(eventName: string | symbol, listener: (...args: any[]) => void): this;
    off(eventName: string | symbol, listener: (...args: any[]) => void): this;
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string | symbol): this;
    request<T = unknown>(args: RequestArguments): Promise<T>
}

declare global {
    export interface Window {
        ethereum?: EthereumProvider;
    }
}

export declare let window: Window & typeof globalThis;