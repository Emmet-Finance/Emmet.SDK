import USDT_ABI from '../../abi/usdt';
import { LOGO_USDT } from '../../logos/tokens';

const USDT = {
    abi: USDT_ABI,
    decimals: "18",
    logo: LOGO_USDT,
    name: "USDT",
    native: {
        "address": "0x291E558C60FB567087D9b87bd62b84Af67b9a376",
        "chain": "goerly"
    },
    wrapped: [
        {
            "address": "0x65329f02eb198478E18212253B186D9e1AFA04f9",
            "chain": "bscTestnet"
        },
        {
            "address": "0xB44e023C1ec38ee5E4205A3AA07671aF9cF3Cb01",
            "chain": "mumbai"
        },
        {
            "address": "0x59805ca29E5217b4Ce8cb48e57F9C7EcF0D5604F",
            "chain": "sparknet"
        }
    ]
}

export default USDT;