import { ethers } from 'ethers';

export interface IConnectedWallet {
    isConnected: boolean;
    address?: string;
    balance?: {
        value: string;
        formatted: string;
    };
}

export interface IWalletProvider {
    getWeb3Provider: () => Promise<ethers.providers.Web3Provider>;
    isMobile: () => boolean;
}

export interface Window {
    ethereum: any
}