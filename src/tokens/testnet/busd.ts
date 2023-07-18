import BUSD_ABI from '../../abi/busd';
import { LOGO_BUSD } from '../../logos/tokens';

const BUSD = {
    abi: BUSD_ABI,
    decimals: "18",
    logo: LOGO_BUSD,
    name: "BUSD",
    native: {
        "address": "0x2991E99Df3EDD3F15962294A28b0aD1F4d56E07a",
        "chain": "goerly"
    },
    wrapped: [
        {
            "address": "0xeB7A36D0B2700851c370283c83f31CfC670bF933",
            "chain": "bscTestnet"
        },
        {
            "address": "0xCbD10d57EE3bc0088B3db30777E8b415C95f3747",
            "chain": "mumbai"
        },
        {
            "address": "0xbF99037F929222cc7C0aa67acd91A12f4782b96A",
            "chain": "sparknet"
        }
    ]
}

export default BUSD;