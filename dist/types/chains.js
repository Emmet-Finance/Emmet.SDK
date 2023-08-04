"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVMTestnets = exports.EVMMainnets = exports.testnetChainIdToName = exports.mainnetChainIdToName = exports.testnetChainIds = exports.mainnetChainIds = exports.testnets = exports.mainnets = void 0;
const chains_1 = require("../chains");
exports.mainnets = [
    chains_1.bsc,
    chains_1.ethereum,
    chains_1.fuse,
    chains_1.polygon
];
exports.testnets = [
    chains_1.bscTestnet,
    chains_1.goerli,
    chains_1.mumbai,
    chains_1.sparknet,
];
exports.mainnetChainIds = {};
exports.testnetChainIds = {};
exports.mainnetChainIdToName = {};
exports.testnetChainIdToName = {};
exports.EVMMainnets = {};
exports.EVMTestnets = {};
exports.mainnets.map((net) => {
    exports.EVMMainnets[net.name] = net;
    exports.mainnetChainIds[net.name] = net.id;
    exports.mainnetChainIdToName[net.id] = net.name;
});
exports.testnets.map((net) => {
    exports.EVMTestnets[net.name] = net;
    exports.testnetChainIds[net.name] = net.id;
    exports.testnetChainIdToName[net.id] = net.name;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGVzL2NoYWlucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxzQ0FXbUI7QUFZTixRQUFBLFFBQVEsR0FBZTtJQUNoQyxZQUFHO0lBQ0gsaUJBQVE7SUFDUixhQUFJO0lBQ0osZ0JBQU87Q0FDVixDQUFDO0FBS1csUUFBQSxRQUFRLEdBQWU7SUFDaEMsbUJBQVU7SUFDVixlQUFNO0lBQ04sZUFBTTtJQUNOLGlCQUFRO0NBQ1gsQ0FBQztBQU1TLFFBQUEsZUFBZSxHQUFrQixFQUFFLENBQUM7QUFNcEMsUUFBQSxlQUFlLEdBQWtCLEVBQUUsQ0FBQztBQUtwQyxRQUFBLG9CQUFvQixHQUFxQixFQUFFLENBQUM7QUFLNUMsUUFBQSxvQkFBb0IsR0FBcUIsRUFBRSxDQUFDO0FBSzVDLFFBQUEsV0FBVyxHQUFnQixFQUFFLENBQUM7QUFLOUIsUUFBQSxXQUFXLEdBQWdCLEVBQUUsQ0FBQztBQUd6QyxnQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxFQUFFO0lBRTFCLG1CQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM1Qix1QkFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ25DLDRCQUFvQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBRTVDLENBQUMsQ0FBQyxDQUFDO0FBR0gsZ0JBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRTtJQUUxQixtQkFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDNUIsdUJBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNuQyw0QkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztBQUU1QyxDQUFDLENBQUMsQ0FBQyJ9