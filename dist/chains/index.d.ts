import { bsc } from './bsc';
import { ethereum as Mainnet } from './ethereum';
import { fuse } from './fuse';
import { linea } from './linea';
import { polygon } from './polygon';
import { athens3 } from './athens3';
import { base } from './base';
import { basegoerli } from './basegoerli';
import { bscTestnet } from './bscTestnet';
import { goerli } from './goerli';
import { lineaTestnet } from './lineaTestnet';
import { mumbai } from './mumbai';
import { shardeumBetanet } from './shardeumBetanet';
import { sparknet } from './sparknet';
declare const MAINNETS: {
    base: import("..").EVMChain;
    bsc: import("..").EVMChain;
    linea: import("..").EVMChain;
    Mainnet: import("..").EVMChain;
    fuse: import("..").EVMChain;
    polygon: import("..").EVMChain;
};
declare const TESTNETS: {
    athens3: import("..").EVMChain;
    basegoerli: import("..").EVMChain;
    bsctestnet: import("..").EVMChain;
    goerli: import("..").EVMChain;
    lineatestnet: import("..").EVMChain;
    mumbai: import("..").EVMChain;
    shardeumBetanet: import("..").EVMChain;
    sparknet: import("..").EVMChain;
};
declare const ALL_CHAINS: {
    athens3: import("..").EVMChain;
    basegoerli: import("..").EVMChain;
    bsctestnet: import("..").EVMChain;
    goerli: import("..").EVMChain;
    lineatestnet: import("..").EVMChain;
    mumbai: import("..").EVMChain;
    shardeumBetanet: import("..").EVMChain;
    sparknet: import("..").EVMChain;
};
export { ALL_CHAINS, MAINNETS, base, bsc, Mainnet, fuse, linea, polygon, TESTNETS, athens3, basegoerli, bscTestnet, goerli, lineaTestnet, mumbai, shardeumBetanet, sparknet, };
