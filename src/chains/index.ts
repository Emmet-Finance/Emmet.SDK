// Mainnets:
import { bsc } from './bsc';
import { ethereum } from './ethereum';
import { fuse } from './fuse'
import { polygon } from './polygon';
// Testnets:
import { athens3 } from './athens3';
import { bscTestnet } from './bscTestnet';
import { goerli } from './goerli';
import { mumbai } from './mumbai';
import { sparknet } from './sparknet';

const MAINNETS = {
    bsc,
    ethereum,
    fuse,
    polygon
}

const TESTNETS = {
    athens3,
    bsctestnet: bscTestnet,
    goerli,
    mumbai,
    sparknet
}

const ALL_CHAINS = MAINNETS && TESTNETS;

export {
    ALL_CHAINS,
    MAINNETS,
    bsc,
    ethereum,
    fuse,
    polygon,

    TESTNETS,
    athens3,
    bscTestnet,
    goerli,
    mumbai,
    sparknet,
}