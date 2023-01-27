import { getTimeRangeForPeriod, TimePeriod, timeRangeToPeriod } from "data/timeStamps";
import { useState } from "react";
import { Configure, useInstantSearch } from "react-instantsearch-hooks-web";
import { DateFieldDropdown } from "./DateFieldDropdown";
import { TimePeriodDropDown } from "./TimePeriodDropDown";

interface IProps {
  index: string;
}

interface IDateFilters {
  dateField: string;
  timeRange: string;
}

export const DateFilters = ({ index }: IProps) => {
  const { indexUiState } = useInstantSearch();

  let defaultDateField = "dueDate";
  let defaultTimePeriod: TimePeriod = "today";

  // parse the time choices from the url (if any)
  if (indexUiState.configure?.filters) {
    const parsedPeriod = timeRangeToPeriod(indexUiState.configure.filters);
    defaultDateField = parsedPeriod.dateField;
    defaultTimePeriod = parsedPeriod.timePeriod;
  }

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
