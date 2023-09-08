import { bsc } from './bsc';
import { ethereum } from './ethereum';
import { fuse } from './fuse';
import { polygon } from './polygon';
import { athens3 } from './athens3';
import { base } from './base';
import { basegoerli } from './basegoerli';
import { bscTestnet } from './bscTestnet';
import { goerli } from './goerli';
import { mumbai } from './mumbai';
import { sparknet } from './sparknet';
declare const MAINNETS: {
    base: import("..").EVMChain;
    bsc: import("..").EVMChain;
    ethereum: import("..").EVMChain;
    fuse: import("..").EVMChain;
    polygon: import("..").EVMChain;
};
declare const TESTNETS: {
    athens3: import("..").EVMChain;
    basegoerli: import("..").EVMChain;
    bsctestnet: import("..").EVMChain;
    goerli: import("..").EVMChain;
    mumbai: import("..").EVMChain;
    sparknet: import("..").EVMChain;
};
declare const ALL_CHAINS: {
    athens3: import("..").EVMChain;
    basegoerli: import("..").EVMChain;
    bsctestnet: import("..").EVMChain;
    goerli: import("..").EVMChain;
    mumbai: import("..").EVMChain;
    sparknet: import("..").EVMChain;
};
export { ALL_CHAINS, MAINNETS, base, bsc, ethereum, fuse, polygon, TESTNETS, athens3, basegoerli, bscTestnet, goerli, mumbai, sparknet, };
