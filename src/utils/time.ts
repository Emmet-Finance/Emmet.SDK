const MILLISECOND = 1;
const SECOND = MILLISECOND * 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
// Optimistic roll-ups cool down period
const WEEK = DAY * 7;

export const TimeUnit = {
    day: DAY,
    hour: HOUR,
    millisecond: MILLISECOND,
    minute: MINUTE,
    second: SECOND,
    week: WEEK
}