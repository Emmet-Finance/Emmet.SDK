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
        athens3:"0x34356c720F14b7F647f79436d6d8891b3D048fd3",
        basegoerli:"0x45eAFd5844DCb7CEdF04158C71FaAb0D4380814d",
        lineatestnet:"0xC1f1d4b70824Ac54207C00a894B5Ff5ee2219FdE",
        shardeumbetanet:"0x34356c720f14b7f647f79436d6d8891b3d048fd3",
        scrollsepolia:"0xCaBE7F9421405cd2f2fCe4a1c46157d55e576808",
    } as ContractAddress,
    abi: DAI_ABI,
    decimals: 18,
    logo: LOGO_DAI,
    name: "DAI",
    native: "goerli"
}

export default DAI;