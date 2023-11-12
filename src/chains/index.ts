// Mainnets:
import { bsc } from './bsc';
import { ethereum as Mainnet } from './ethereum';
import { fuse } from './fuse';
import { linea } from './linea';
import { polygon } from './polygon';
// Testnets:
import { athens3 } from './athens3';
import { base } from './base';
import { basegoerli } from './basegoerli';
import { bscTestnet } from './bscTestnet';
import { goerli } from './goerli';
import { lineaTestnet } from './lineaTestnet';
import { mumbai } from './mumbai';
import { scrollSepolia } from './scrollSepolia';
import { skaleTestnet } from './skaleTestnet';
import { shardeumBetanet } from './shardeumBetanet';
import { sparknet } from './sparknet';

const MAINNETS = {
    base,
    bsc,
    linea,
    Mainnet,
    fuse,
    polygon
}

const TESTNETS = {
    athens3,
    basegoerli,
    bsctestnet: bscTestnet,
    goerli,
    lineatestnet: lineaTestnet,
    mumbai,
    scrollsepolia: scrollSepolia,
    skale: skaleTestnet,
    shardeumbetanet:shardeumBetanet,
    sparknet
}

const ALL_CHAINS = MAINNETS && TESTNETS;

export {
    ALL_CHAINS,
    MAINNETS,
    base,
    bsc,
    Mainnet,
    fuse,
    linea,
    polygon,

    TESTNETS,
    athens3,
    basegoerli,
    bscTestnet,
    goerli,
    lineaTestnet,
    mumbai,
    scrollSepolia,
    skaleTestnet,
    shardeumBetanet,
    sparknet,
}