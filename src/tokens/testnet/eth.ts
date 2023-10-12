import WERC20 from '../../abi/wrappedERC20';
import { LOGO_ETH } from '../../logos/tokens';
import { ContractAddress, SupportedTokenType } from '../../types';

const ETH: SupportedTokenType = {
    address: {
        // Native
        goerli:"",
        // Wrapped
        bsctestnet:"0xB7179d40FD12C84C300c1433bc93Cfcc388895fD",
        mumbai:"0xeC3f5eE48d8F592d57cFF674885AdF82BeE02cF7",
        sparknet:"0x239e6A9C05e55066C7e0fF899a32AA06A3AeafBD",
        athens3:"0x9FAdC446f0968946a1242D98E640a7A84c4D4A80",
        basegoerli:"0xb4F82A7ba63AD72b3a0E1DE9cf604B69783dCEc0",
        lineatestnet:"0x8aa7d89C0cc2891f830E86492b88a467a82c2F7E",
        shardeumbetanet:"0x5231cbf50ed0f5e258fc2877dec0d359a2cfb9c5",
        scrollsepolia:"0xa2BfEd3d6E610D109EbFa9FCa5a5c3Abdc3eF3DF",
    } as ContractAddress,
    abi: WERC20,
    decimals: 18,
    logo: LOGO_ETH,
    name: "ETH",
    native: "goerli"
}

export default ETH;