import USDT_ABI from '../../abi/usdt';
import { LOGO_USDT } from '../../logos/tokens';
import { ContractAddress, SupportedTokenType } from '../../types';

const USDT: SupportedTokenType = {
    address: {
        // Native
        goerli:"0x291E558C60FB567087D9b87bd62b84Af67b9a376",
        // Wrapped
        bsctestnet:"0x65329f02eb198478E18212253B186D9e1AFA04f9",
        mumbai:"0xB44e023C1ec38ee5E4205A3AA07671aF9cF3Cb01",
        sparknet:"0x59805ca29E5217b4Ce8cb48e57F9C7EcF0D5604F",
        athens3:"0xd2cD72Ee3FbBf8fcbCCB7E8dB70220450F125AA6"
    } as ContractAddress,
    abi: USDT_ABI,
    decimals: 18,
    logo: LOGO_USDT,
    name: "USDT",
    native: "goerli"
}

export default USDT;