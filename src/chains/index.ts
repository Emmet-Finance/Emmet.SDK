// Mainnets:
import { bsc } from './bsc';
import { ethereum } from './ethereum';
import { fuse } from './fuse'
import { polygon } from './polygon';
// Testnets:
import { athens3 } from './athens3';
import { base } from './base';
import { basegoerli } from './basegoerli';
import { bscTestnet } from './bscTestnet';
import { goerli } from './goerli';
import { mumbai } from './mumbai';
import { sparknet } from './sparknet';

const MAINNETS = {
    base,
    bsc,
    ethereum,
    fuse,
    polygon
}

const TESTNETS = {
    athens3,
    basegoerli,
    bsctestnet: bscTestnet,
    goerli,
    mumbai,
    sparknet
}

const ALL_CHAINS = MAINNETS && TESTNETS;

export {
    ALL_CHAINS,
    MAINNETS,
    base,
    bsc,
    ethereum,
    fuse,
    polygon,

    TESTNETS,
    athens3,
    basegoerli,
    bscTestnet,
    goerli,
    mumbai,
    sparknet,
}