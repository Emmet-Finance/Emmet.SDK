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
        athens3:"0x9698b2bf20286248C5CCeBaCE53A94BB1A088854",
        basegoerli:"0xD0915Be82a62Adbd6Af963A738989ECb41244B08",
        lineatestnet:"0x12622c184B951f0e297BAE8c459d695BB18a1bfA",
        shardeumbetanet:"0xf7A1cf348779c1AE88D7C85215d907C0f97953C1",
        scrollsepolia:"0xaf35A01c06529C66a56360c0afDb021512F078E7",
    } as ContractAddress,
    abi: EMMET_ABI,
    decimals: 18,
    logo: LOGO_EMMET,
    name: "EMMET",
    native: "goerli"
}

export default EMMET;