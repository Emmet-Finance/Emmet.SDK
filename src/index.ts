// ABIs
import BUSD     from "../abis/busd.json" ;
import DAI      from "../abis/dai.json" ;
import FTBridge from "../abis/FTBridge.json" ;
import USDT     from "../abis/usdt.json" ;
import WERC20   from "../abis/WrappedERC20.json" ;

// DATA
import MAINNETS from "../data/mainnet.json" ;
import TESTNETS from "../data/testnet.json" ;
import MAINNET_TOKENS from "../data/mainnetTokens.json" ;
import TESTNET_TOKENS from "../data/testnetTokens.json" ;

// Logos:Chains
import{
    LOGO_BSC,
    LOGO_ETHEREUM,
    LOGO_FUSE,
    LOGO_POLYGON,
} from './logos/chains.js';

// Logos:Tokens
import{
    LOGO_BUSD,
    LOGO_DAI,
    LOGO_USDT,
} from './logos/tokens.js'

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
// import {
//     CoinbaseWalletProvider,
//     MetaMaskWalletProvider,
//     WalletProvider,
// } from './wallets/index.js'


export {
    // ABIs
    BUSD,
    DAI,
    FTBridge,
    USDT,
    WERC20,
    // DATA
    MAINNETS,
    TESTNETS,
    MAINNET_TOKENS,
    TESTNET_TOKENS,
    // Logos: Chains
    LOGO_BSC,
    LOGO_ETHEREUM,
    LOGO_FUSE,
    LOGO_POLYGON,
    //Logos:Tokens
    LOGO_BUSD,
    LOGO_DAI,
    LOGO_USDT,
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
    // CoinbaseWalletProvider,
    // MetaMaskWalletProvider,
    // WalletProvider,

}