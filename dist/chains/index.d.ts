import { bsc } from './bsc';
import { ethereum } from './ethereum';
import { fuse } from './fuse';
import { polygon } from './polygon';
import { athens3 } from './athens3';
import { bscTestnet } from './bscTestnet';
import { goerli } from './goerly';
import { mumbai } from './mumbai';
import { sparknet } from './sparknet';
declare const MAINNETS: {
    bsc: import("..").EVMChain;
    ethereum: import("..").EVMChain;
    fuse: import("..").EVMChain;
    polygon: import("..").EVMChain;
};
declare const TESTNETS: {
    athens3: import("..").EVMChain;
    bsctestnet: import("..").EVMChain;
    goerli: import("..").EVMChain;
    mumbai: import("..").EVMChain;
    sparknet: import("..").EVMChain;
};
declare const ALL_CHAINS: {
    athens3: import("..").EVMChain;
    bsctestnet: import("..").EVMChain;
    goerli: import("..").EVMChain;
    mumbai: import("..").EVMChain;
    sparknet: import("..").EVMChain;
};
export { ALL_CHAINS, MAINNETS, bsc, ethereum, fuse, polygon, TESTNETS, athens3, bscTestnet, goerli, mumbai, sparknet, };
