import EMMET_ABI from '../../abi/emmet';
import { LOGO_EMMET } from '../../logos/tokens';
import { ContractAddress, SupportedTokenType } from '../../types';

const EMMET: SupportedTokenType = {
    address: {
        // Native
        bsctestnet:"0x11b8DF9c0906a44141F47245F6eA52A5553431C8",
        // Wrapped
        goerli:"0x7bded531A4b7aB53787a9502B3748A606AA39AE2",
        mumbai:"0x1cb446f077e484E20Dfe4da22Da0De3c160dD51a",
        sparknet:"0xee064029D0B37759c93594c0dD7fbAd4C2669EaD",
        athens3:"0xc03B1253770a34289f8Aa44b694b190dF9bb69b8",
        basegoerli:"0xc03B1253770a34289f8Aa44b694b190dF9bb69b8",
        lineatestnet:"0x523FE46C8CcF973F6cB1Ff5Dd1E77d385BdFd6Ce",
        shardeumbetanet:"0x6cc5106e7f00031b3f0186608a9962d7f938d369",
        scrollsepolia:"0xaf35A01c06529C66a56360c0afDb021512F078E7",
    } as ContractAddress,
    abi: EMMET_ABI,
    decimals: 18,
    logo: LOGO_EMMET,
    name: "EMMET",
    native: "goerli"
}

export default EMMET;