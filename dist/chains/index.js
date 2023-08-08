"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sparknet = exports.mumbai = exports.goerli = exports.bscTestnet = exports.TESTNETS = exports.polygon = exports.fuse = exports.ethereum = exports.bsc = exports.MAINNETS = exports.ALL_CHAINS = void 0;
const bsc_1 = require("./bsc");
Object.defineProperty(exports, "bsc", { enumerable: true, get: function () { return bsc_1.bsc; } });
const ethereum_1 = require("./ethereum");
Object.defineProperty(exports, "ethereum", { enumerable: true, get: function () { return ethereum_1.ethereum; } });
const fuse_1 = require("./fuse");
Object.defineProperty(exports, "fuse", { enumerable: true, get: function () { return fuse_1.fuse; } });
const polygon_1 = require("./polygon");
Object.defineProperty(exports, "polygon", { enumerable: true, get: function () { return polygon_1.polygon; } });
const bscTestnet_1 = require("./bscTestnet");
Object.defineProperty(exports, "bscTestnet", { enumerable: true, get: function () { return bscTestnet_1.bscTestnet; } });
const goerly_1 = require("./goerly");
Object.defineProperty(exports, "goerli", { enumerable: true, get: function () { return goerly_1.goerli; } });
const mumbai_1 = require("./mumbai");
Object.defineProperty(exports, "mumbai", { enumerable: true, get: function () { return mumbai_1.mumbai; } });
const sparknet_1 = require("./sparknet");
Object.defineProperty(exports, "sparknet", { enumerable: true, get: function () { return sparknet_1.sparknet; } });
const MAINNETS = {
    bsc: bsc_1.bsc,
    ethereum: ethereum_1.ethereum,
    fuse: fuse_1.fuse,
    polygon: polygon_1.polygon
};
exports.MAINNETS = MAINNETS;
const TESTNETS = {
    bsctestnet: bscTestnet_1.bscTestnet,
    goerli: goerly_1.goerli,
    mumbai: mumbai_1.mumbai,
    sparknet: sparknet_1.sparknet
};
exports.TESTNETS = TESTNETS;
const ALL_CHAINS = MAINNETS && TESTNETS;
exports.ALL_CHAINS = ALL_CHAINS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2hhaW5zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLCtCQUEwQjtBQTZCdEIsb0ZBN0JJLFNBQUcsT0E2Qko7QUE1QlAseUNBQW9DO0FBNkJoQyx5RkE3QkksbUJBQVEsT0E2Qko7QUE1QlosaUNBQTJCO0FBNkJ2QixxRkE3QkksV0FBSSxPQTZCSjtBQTVCUix1Q0FBa0M7QUE2QjlCLHdGQTdCSSxpQkFBTyxPQTZCSjtBQTNCWCw2Q0FBd0M7QUE4QnBDLDJGQTlCSSx1QkFBVSxPQThCSjtBQTdCZCxxQ0FBZ0M7QUE4QjVCLHVGQTlCSSxlQUFNLE9BOEJKO0FBN0JWLHFDQUFnQztBQThCNUIsdUZBOUJJLGVBQU0sT0E4Qko7QUE3QlYseUNBQW9DO0FBOEJoQyx5RkE5QkksbUJBQVEsT0E4Qko7QUE1QlosTUFBTSxRQUFRLEdBQUc7SUFDYixHQUFHLEVBQUgsU0FBRztJQUNILFFBQVEsRUFBUixtQkFBUTtJQUNSLElBQUksRUFBSixXQUFJO0lBQ0osT0FBTyxFQUFQLGlCQUFPO0NBQ1YsQ0FBQTtBQWFHLDRCQUFRO0FBWFosTUFBTSxRQUFRLEdBQUc7SUFDYixVQUFVLEVBQUUsdUJBQVU7SUFDdEIsTUFBTSxFQUFOLGVBQU07SUFDTixNQUFNLEVBQU4sZUFBTTtJQUNOLFFBQVEsRUFBUixtQkFBUTtDQUNYLENBQUE7QUFZRyw0QkFBUTtBQVZaLE1BQU0sVUFBVSxHQUFHLFFBQVEsSUFBSSxRQUFRLENBQUM7QUFHcEMsZ0NBQVUifQ==