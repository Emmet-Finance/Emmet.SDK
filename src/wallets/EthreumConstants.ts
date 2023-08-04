/**********************************************
 *              COMMON EVM CONSTANTS          *
 *********************************************/
export default {
    ETH_INITIALISED:"ethereum#initialized",
    ETH_GET_BALANCE:"eth_getBalance",
    ETH_CHAIN_ID: "eth_chainId",
}


/**********************************************
 *              METAMASK CONSTANTS            *
 *********************************************/
export const RestrictedMethods = Object.freeze({
    eth_accounts: 'eth_accounts',
    ///: BEGIN:ONLY_INCLUDE_IN(snaps)
    snap_dialog: 'snap_dialog',
    snap_notify: 'snap_notify',
    snap_manageState: 'snap_manageState',
    snap_getBip32PublicKey: 'snap_getBip32PublicKey',
    snap_getBip32Entropy: 'snap_getBip32Entropy',
    snap_getBip44Entropy: 'snap_getBip44Entropy',
    snap_getEntropy: 'snap_getEntropy',
    wallet_snap: 'wallet_snap',
    ///: END:ONLY_INCLUDE_IN
    ///: BEGIN:ONLY_INCLUDE_IN(keyring-snaps)
    snap_manageAccounts: 'snap_manageAccounts',
    ///: END:ONLY_INCLUDE_IN
  } as const);
  
  
  export const MESSAGE_TYPE = {
    ADD_ETHEREUM_CHAIN: 'wallet_addEthereumChain',
    ETH_ACCOUNTS: RestrictedMethods.eth_accounts,
    ETH_DECRYPT: 'eth_decrypt',
    ETH_GET_ENCRYPTION_PUBLIC_KEY: 'eth_getEncryptionPublicKey',
    ETH_REQUEST_ACCOUNTS: 'eth_requestAccounts',
    ETH_SIGN: 'eth_sign',
    ETH_SIGN_TYPED_DATA: 'eth_signTypedData',
    ETH_SIGN_TYPED_DATA_V3: 'eth_signTypedData_v3',
    ETH_SIGN_TYPED_DATA_V4: 'eth_signTypedData_v4',
    GET_PROVIDER_STATE: 'metamask_getProviderState',
    LOG_WEB3_SHIM_USAGE: 'metamask_logWeb3ShimUsage',
    PERSONAL_SIGN: 'personal_sign',
    SEND_METADATA: 'metamask_sendDomainMetadata',
    SWITCH_ETHEREUM_CHAIN: 'wallet_switchEthereumChain',
    TRANSACTION: 'transaction',
    WALLET_REQUEST_PERMISSIONS: 'wallet_requestPermissions',
    WATCH_ASSET: 'wallet_watchAsset',
    WATCH_ASSET_LEGACY: 'metamask_watchAsset',
    ///: BEGIN:ONLY_INCLUDE_IN(snaps)
    SNAP_DIALOG_ALERT: `${RestrictedMethods.snap_dialog}:alert`,
    SNAP_DIALOG_CONFIRMATION: `${RestrictedMethods.snap_dialog}:confirmation`,
    SNAP_DIALOG_PROMPT: `${RestrictedMethods.snap_dialog}:prompt`,
    ///: END:ONLY_INCLUDE_IN
    ///: BEGIN:ONLY_INCLUDE_IN(build-mmi)
    MMI_AUTHENTICATE: 'metamaskinstitutional_authenticate',
    MMI_REAUTHENTICATE: 'metamaskinstitutional_reauthenticate',
    MMI_REFRESH_TOKEN: 'metamaskinstitutional_refresh_token',
    MMI_SUPPORTED: 'metamaskinstitutional_supported',
    MMI_PORTFOLIO: 'metamaskinstitutional_portfolio',
    MMI_OPEN_SWAPS: 'metamaskinstitutional_open_swaps',
    MMI_CHECK_IF_TOKEN_IS_PRESENT: 'metamaskinstitutional_checkIfTokenIsPresent',
    MMI_SET_ACCOUNT_AND_NETWORK: 'metamaskinstitutional_setAccountAndNetwork',
    MMI_OPEN_ADD_HARDWARE_WALLET: 'metamaskinstitutional_openAddHardwareWallet',
    ///: END:ONLY_INCLUDE_IN
  } as const;