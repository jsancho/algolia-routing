import { getTimeRangeForPeriod, TimePeriod } from "data/timeStamps";
import { useInstantSearch } from "react-instantsearch-hooks-web";
import { DateFieldDropdown } from "./DateFieldDropdown";
import { TimePeriodDropDown } from "./TimePeriodDropDown";

interface IProps {
  index: string;
}

export const DateFilters = ({ index }: IProps) => {
  const { indexUiState, setIndexUiState } = useInstantSearch();

  const onChangeDateField = (dateField: string) => {
    // setIndexUiState(prev => ({
    //   ...prev,
    //   configure: {
    //     filters: `${dateField} `
    //   }
    // }));
  };

  const onChangeTimePeriod = (timePeriod: TimePeriod) => {
    const timeRange = getTimeRangeForPeriod(timePeriod);
    // setIndexUiState(prev => ({
    //   ...prev,
    //   configure: {
    //     filters: `${dateField} `
    //   }
    // }));
  };

  return (
    <>
      <DateFieldDropdown index={index} onChangeDateField={onChangeDateField} />
      <TimePeriodDropDown index={index} onChangeTimePeriod={onChangeTimePeriod} />
    </>
  );
};
