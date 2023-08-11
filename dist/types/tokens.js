"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedTokenNames = exports.TestnetTokenNames = exports.MainnetTokenNames = void 0;
const tokens_1 = require("../tokens");
exports.MainnetTokenNames = Object.keys(tokens_1.mainnetTokens);
exports.TestnetTokenNames = Object.keys(tokens_1.testnetTokens);
exports.SupportedTokenNames = exports.MainnetTokenNames && exports.TestnetTokenNames;
//# sourceMappingURL=tokens.js.map