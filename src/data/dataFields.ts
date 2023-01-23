import { getTimeRangeForPeriod, TimePeriod, TimePeriods } from "./timeStamps";
import { startCase } from "lodash-es";

export interface ISortItem {
  label: string;
  value: string;
}

export const getSortableItems = (index: string): ISortItem[] => {
  return [
    { label: "Relevance", value: index },
    {
      label: "Priority (asc)",
      value: `${index}_priority_asc`
    },
    {
      label: "Priority (desc)",
      value: `${index}_priority_desc`
    }
  ];
};

export const getFilterableDates = (index: string, fields: string[]): ISortItem[] => {
  return fields.map(field => {
    return {
      label: `${startCase(field)}`,
      value: `${field}TimeStamp`
    };
  });
};

export const getFilterableTimePeriods = (): ISortItem[] => {
  return TimePeriods.map(period => {
    return {
      label: `${startCase(period)}`,
      value: period
    };
  });
};
