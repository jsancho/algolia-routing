import { getTimeRangeForPeriod, TimePeriod } from "data/timeStamps";
import { useState } from "react";
import { Configure } from "react-instantsearch-hooks-web";
import { DateFieldDropdown } from "./DateFieldDropdown";
import { TimePeriodDropDown } from "./TimePeriodDropDown";

interface IProps {
  index: string;
}

interface IDateFilters {
  dateField: string;
  timeRange: string;
}

const defaultDateField = "dueDate";
const defaultTimePeriod = "today";

export const DateFilters = ({ index }: IProps) => {
  const [filters, setFilters] = useState<IDateFilters>({
    dateField: defaultDateField,
    timeRange: getTimeRangeForPeriod(defaultTimePeriod)
  });

  const onChangeDateField = (dateField: string) => {
    setFilters(prev => ({ ...prev, dateField }));
  };

  const onChangeTimePeriod = (timePeriod: TimePeriod) => {
    const timeRange = getTimeRangeForPeriod(timePeriod);
    setFilters(prev => ({ ...prev, timeRange }));
  };

  const filter = `${filters.dateField}TimeStamp: ${filters.timeRange}`;

  return (
    <>
      <DateFieldDropdown
        index={index}
        defaultValue={defaultDateField}
        onChangeDateField={onChangeDateField}
      />
      <TimePeriodDropDown
        defaultValue={defaultTimePeriod}
        onChangeTimePeriod={onChangeTimePeriod}
      />
      <Configure filters={filter} />
    </>
  );
};
