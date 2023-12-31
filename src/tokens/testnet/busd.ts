import BUSD_ABI from '../../abi/busd';
import { LOGO_BUSD } from '../../logos/tokens';
import { SupportedTokenType, ContractAddress } from '../../types';

const BUSD: SupportedTokenType = {
    address: {
        // Native
        goerli:"0x2991E99Df3EDD3F15962294A28b0aD1F4d56E07a",
        // Wrapped
        bsctestnet:"0xeB7A36D0B2700851c370283c83f31CfC670bF933",
        mumbai:"0xCbD10d57EE3bc0088B3db30777E8b415C95f3747",
        sparknet:"0xbF99037F929222cc7C0aa67acd91A12f4782b96A",
        athens3:"0x4D2E1a2Dd8fd4F60295d4F46F3B783dC5b5570F3",
        basegoerli:"0xF59bbE6673F8716879ad60bb961f717C718dbF90",
        lineatestnet:"0xA0C581aA8656277Fa390b0a234C7738514c99949",
        shardeumbetanet:"0xbcedf86dea82a345d3905d963e4e4bbabd5f9789",
        scrollsepolia:"0xD62cF1Fe287361c042eB71b7121e3AFCC03D2A95",
        skaletestnet:"0xFE6095f4eE9DDa119CD83D6fa76eE5Fc02Ae5199",
    } as ContractAddress,
    abi: BUSD_ABI,
    decimals: 18,
    logo: LOGO_BUSD,
    name: "BUSD",
    native: "goerli"
}

export default BUSD;