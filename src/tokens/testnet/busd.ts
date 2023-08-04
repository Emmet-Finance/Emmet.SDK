import BUSD_ABI from '../../abi/busd';
import { LOGO_BUSD } from '../../logos/tokens';
import { SupportedTokenType } from '../../types';

const BUSD = {
    address: {
        // Native
        goerly:"0x2991E99Df3EDD3F15962294A28b0aD1F4d56E07a",
        // Wrapped
        bsctestnet:"0xeB7A36D0B2700851c370283c83f31CfC670bF933",
        mumbai:"0xCbD10d57EE3bc0088B3db30777E8b415C95f3747",
        sparknet:"0xbF99037F929222cc7C0aa67acd91A12f4782b96A",
    },
    abi: BUSD_ABI,
    decimals: 18,
    logo: LOGO_BUSD,
    name: "BUSD",
    native: "goerly"
} as const satisfies SupportedTokenType

export default BUSD;