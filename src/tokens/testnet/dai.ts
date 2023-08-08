import DAI_ABI from '../../abi/dai';
import { LOGO_DAI } from '../../logos/tokens';
import { ContractAddress, SupportedTokenType } from '../../types';

const DAI: SupportedTokenType = {
    address: {
        // Native
        goerli:"0x3fcc5C26fAd6B8fC9461E1d6f920A3C96F15f40a",
        // Wrapped
        bsctestnet:"0x2AEaD32687aB9D18bb63248f94cD0ADA3ce45ce0",
        mumbai:"0xD55C04E15B9808bf3e561367D12f3B2dfAA55d48",
        sparknet:"0xe0157e7a2C90A88371b508aD5818715680010086",
    } as ContractAddress,
    abi: DAI_ABI,
    decimals: 18,
    logo: LOGO_DAI,
    name: "DAI",
    native: "goerly"
}

export default DAI;