import BNB from './chain/bnb.js'
import ETH from './chain/eth.js'
import FUSE from './chain/fuse.js'
import POLYGON from './chain/polygon.js'

import BUSD from './token/busd.js'
import DAI from './token/dai.js'
import USDT from './token/usdt.js'

export const CHAIN_LOGOS = {
    bsc: BNB,
    ethereum: ETH,
    fuse: FUSE,
    polygon: POLYGON
}

export const TOKEN_LOGOS = {
    busd: BUSD,
    dai: DAI,
    usdt: USDT
}