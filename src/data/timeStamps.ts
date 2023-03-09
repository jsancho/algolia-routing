export const TimePeriods = ["today", "week", "month"] as const;
export type TimePeriod = typeof TimePeriods[number];

import {
  endOfDay,
  endOfMonth,
  endOfWeek,
  getUnixTime,
  startOfDay,
  startOfMonth,
  startOfWeek
} from "date-fns";

export const getTimeRangeForPeriod = (timePeriod: TimePeriod) => {
  switch (timePeriod) {
    case "week":
      return getCurrentWeekTimeStampRange();
    case "month":
      return getCurrentMonthTimeStampRange();
    case "today":
      return getTodayTimeStampRange();
  }
};

export const getTodayTimeStampRange = () => {
  const startTime = getUnixTime(startOfDay(new Date()));
  const endTime = getUnixTime(endOfDay(new Date()));

  return `${startTime} TO ${endTime}`;
};

export const getCurrentWeekTimeStampRange = () => {
  // https://date-fns.org/v2.29.3/docs/startOfWeek
  // the index of the first day of the week (0 - Sunday, 1 - Monday, etc )
  const weekStartsOnMonday = 1;

  const firstDayOfWeek = startOfWeek(new Date(), { weekStartsOn: weekStartsOnMonday });
  const lastDayOfWeek = endOfWeek(new Date(), { weekStartsOn: weekStartsOnMonday });

  const startTime = getUnixTime(firstDayOfWeek);
  const endTime = getUnixTime(lastDayOfWeek);

  return `${startTime} TO ${endTime}`;
};

export const getCurrentMonthTimeStampRange = () => {
  const startTime = getUnixTime(startOfMonth(new Date()));
  const endTime = getUnixTime(endOfMonth(new Date()));

  return `${startTime} TO ${endTime}`;
};

export const timeRangeToPeriod = (
  timeRange: string
): { dateField: string; timePeriod: TimePeriod } => {
  const regex = /([a-zA-Z]+TimeStamp):\s(\d+)\sTO\s(\d+)/g;
  const result = [...timeRange.matchAll(regex)][0];
  const { 1: dateField, 2: from, 3: to } = result;

  const hourSpan = Math.round((parseInt(to) - parseInt(from)) / 60 / 60);
  const timePeriod: TimePeriod = hourSpan === 24 ? "today" : hourSpan === 24 * 7 ? "week" : "month";

  return {
    dateField,
    timePeriod
  };
};
