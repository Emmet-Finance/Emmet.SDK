// ABIs
import {
    BUSD,
    DAI,
    FTBridge,
    USDT,
    WERC20
} from './abis/index.js';

// Logos
import {
    CHAIN_LOGOS,
    TOKEN_LOGOS,
} from './logos/index.js'

import {
    // Chains
    EVMChain,
    EVMMainnets,
    EVMTestnets,
    EVMMainnetNames,
    EVMTestnetNames,
    MainnetEVMName,
    TestnetEVMName,
    MAINNET_CHAIN_IDS,
    MAINNET_CHAIN_ID_TO_NAME,
    TESTNET_CHAIN_IDS,
    TESTNET_CHAIN_ID_TO_NAME,
    // Tokens
    ContractAddress,
    SupportedTokenType,
} from './types/index.js';

// Interfaces
import {
    EVMChainMap,
    IConnectedWallet,
    IWalletProvider,
    Window,
} from './interfaces/index.js';

// Enums
import {TEnvironment} from './enums/environment.js';

// Wallets
import {
    //CoinbaseWalletProvider,
    // MetaMaskWalletProvider,
    // WalletProvider,
} from './wallets/index.js'
import { log } from 'console';

export {
    // ABIs
    BUSD,
    DAI,
    FTBridge,
    USDT,
    WERC20,
    // Logos
    CHAIN_LOGOS,
    TOKEN_LOGOS,
    // Enums
    TEnvironment,
    // Interfaces
    EVMChainMap,
    IConnectedWallet,
    IWalletProvider,
    Window,
    // Types: Chains
    EVMChain,
    EVMMainnets,
    EVMTestnets,
    EVMMainnetNames,
    EVMTestnetNames,
    MainnetEVMName,
    TestnetEVMName,
    MAINNET_CHAIN_IDS,
    MAINNET_CHAIN_ID_TO_NAME,
    TESTNET_CHAIN_IDS,
    TESTNET_CHAIN_ID_TO_NAME,
    // Types: Tokens
    ContractAddress,
    SupportedTokenType,
    // Wallets
    //CoinbaseWalletProvider,
    // MetaMaskWalletProvider,
    // WalletProvider,

}

log(MAINNET_CHAIN_IDS)
log(MAINNET_CHAIN_ID_TO_NAME)