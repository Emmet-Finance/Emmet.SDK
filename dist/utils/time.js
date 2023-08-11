"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeUnit = void 0;
const MILLISECOND = 1;
const SECOND = MILLISECOND * 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
exports.TimeUnit = {
    day: DAY,
    hour: HOUR,
    millisecond: MILLISECOND,
    minute: MINUTE,
    second: SECOND,
    week: WEEK
};
//# sourceMappingURL=time.js.map