// ABIs
import {
    BUSD,
    DAI,
    FTBridge,
    USDT,
    WERC20
} from './abis/index.js';

import {
    // Chains
    EVMChain,
    EVMMainnets,
    EVMTestnets,
    EVMMainnetNames,
    EVMTestnetNames,
    MainnetEVMName,
    TestnetEVMName,
    // Tokens
    ContractAddress,
    SupportedTokenType,
} from './types/index.js';

// Interfaces
import {
    EVMChainMap,
    IConnectedWallet,
    IWalletProvider,
} from './interfaces/index.js';

// Enums
import {TEnvironment} from './enums/environment.js';

// Wallets
import {
    CoinbaseWalletProvider,
    MetaMaskWalletProvider,
    WalletProvider
} from './wallets/index.js'

// Chain logos
const logo_bnb = require('./logos/chain/bnb.svg')
const logo_eth = require('./logos/chain/eth.svg')
const logo_fuse = require('./logos/chain/fuse.svg')
const logo_poly = require('./logos/chain/polygon.svg')
// Token Logos
const logo_busd = require('./logos/token/busd.svg')
const logo_dai = require('./logos/token/dai.svg')
const logo_usdt = require('./logos/token/usdt.svg')

export {
    // ABIs
    BUSD,
    DAI,
    FTBridge,
    USDT,
    WERC20,
    // Chains
    EVMChain,
    EVMMainnets,
    EVMTestnets,
    EVMMainnetNames,
    EVMTestnetNames,
    MainnetEVMName,
    TestnetEVMName,
    // Chain logos
    logo_bnb,
    logo_eth,
    logo_fuse,
    logo_poly,
    // Token Logos
    logo_busd,
    logo_dai,
    logo_usdt,
    // Enums
    TEnvironment,
    // Interfaces
    EVMChainMap,
    IConnectedWallet,
    IWalletProvider,
    // Tokens
    ContractAddress,
    SupportedTokenType,
    // Wallets
    CoinbaseWalletProvider,
    MetaMaskWalletProvider,
    WalletProvider,
}