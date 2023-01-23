import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { getFilterableDates } from "data/dataFields";
import { useInstantSearch } from "react-instantsearch-hooks-web";
import { CalendarLtr24Regular } from "@fluentui/react-icons";

interface IProps {
  index: string;
}

export const DateFilter = ({ index }: IProps) => {
  const { indexUiState, setIndexUiState } = useInstantSearch();
  const { sortBy } = indexUiState;

  const changeDateFilter = (label?: any) => {
    const value = getValueForLabel(label);
    // if (value) {
    //   setIndexUiState(prev => ({
    //     ...prev,
    //     sortBy: value
    //   }));
    // }
  };

  const filterableDates = getFilterableDates(index, ["dueDate", "created"]);

  // bug in fluent UI v9 does not send or set the option value
  // it's currently only using the labels
  const getValueForLabel = (label?: string) => {
    const option = filterableDates.find(i => i.label === label);
    return option?.value || index;
  };

  const getLabelForValue = (value: string) => {
    const option = filterableDates.find(i => i.value === value);
    return option?.label || "Relevance";
  };

  return (
    <div className="filterWithIcon">
      <CalendarLtr24Regular />
      <Dropdown
        defaultSelectedOptions={[getLabelForValue(sortBy || filterableDates[0].value)]}
        root={{ style: { minWidth: "150px" } }}
        onOptionSelect={(_event, data) => changeDateFilter(data.optionText)}
      >
        {filterableDates.map(option => (
          <Option key={option.value}>{option.label}</Option>
        ))}
      </Dropdown>
    </div>
  );
};
