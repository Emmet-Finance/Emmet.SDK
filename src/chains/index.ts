// Mainnets:
import {bsc} from './bsc';
import {ethereum} from './ethereum';
import {fuse} from './fuse'
import {polygon} from './polygon';
// Testnets:
import {bscTestnet} from './bscTestnet';
import {goerli} from './goerly';
import {mumbai} from './mumbai';
import {sparknet} from './sparknet';

const MAINNETS = {
    bsc,
    ethereum,
    fuse,
    polygon
}

const TESTNETS = {
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
    bscTestnet,
    goerli,
    mumbai,
    sparknet,
}