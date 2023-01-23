import { getTimeRangeForPeriod, TimePeriod } from "data/timeStamps";
import { useEffect, useState } from "react";
import { useInstantSearch } from "react-instantsearch-hooks-web";
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
  const { setIndexUiState } = useInstantSearch();

  const onChangeDateField = (dateField: string) => {
    setIndexUiState(prev => ({
      ...prev,
      configure: {
        filters: `${dateField}TimeStamp: ${filters.timeRange}`
      }
    }));
    setFilters(prev => ({ ...prev, dateField }));
  };

  const onChangeTimePeriod = (timePeriod: TimePeriod) => {
    const timeRange = getTimeRangeForPeriod(timePeriod);
    setIndexUiState(prev => ({
      ...prev,
      configure: {
        filters: `${filters.dateField}TimeStamp: ${timeRange}`
      }
    }));
    setFilters(prev => ({ ...prev, timeRange }));
  };

  useEffect(() => {
    const initialFilters = `${filters.dateField}TimeStamp: ${filters.timeRange}`;
    console.log(`initial filters ${initialFilters}`);

    setIndexUiState(prev => ({
      ...prev,
      configure: {
        filters: initialFilters
      }
    }));
  }, []);

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
    </>
  );
};
