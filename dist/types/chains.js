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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGVzL2NoYWlucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxzQ0FZbUI7QUF3Qk4sUUFBQSxRQUFRLEdBQWU7SUFDaEMsWUFBRztJQUNILGlCQUFRO0lBQ1IsYUFBSTtJQUNKLGdCQUFPO0NBQ1YsQ0FBQztBQUtXLFFBQUEsUUFBUSxHQUFlO0lBQ2hDLG1CQUFVO0lBQ1YsZUFBTTtJQUNOLGVBQU07SUFDTixpQkFBUTtDQUNYLENBQUM7QUFNUyxRQUFBLGVBQWUsR0FBa0IsRUFBRSxDQUFDO0FBTXBDLFFBQUEsZUFBZSxHQUFrQixFQUFFLENBQUM7QUFLcEMsUUFBQSxvQkFBb0IsR0FBcUIsRUFBRSxDQUFDO0FBSzVDLFFBQUEsb0JBQW9CLEdBQXFCLEVBQUUsQ0FBQztBQUs1QyxRQUFBLFdBQVcsR0FBZ0IsRUFBRSxDQUFDO0FBSzlCLFFBQUEsV0FBVyxHQUFnQixFQUFFLENBQUM7QUFHekMsZ0JBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRTtJQUUxQixtQkFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDNUIsdUJBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNuQyw0QkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztBQUU1QyxDQUFDLENBQUMsQ0FBQztBQUdILGdCQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBWSxFQUFFLEVBQUU7SUFFMUIsbUJBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzVCLHVCQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDbkMsNEJBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFFNUMsQ0FBQyxDQUFDLENBQUMifQ==