import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { getFilterableTimePeriods } from "data/dataFields";
import { useInstantSearch } from "react-instantsearch-hooks-web";

interface IProps {
  index: string;
}

export const TimePeriodDropDown = ({ index }: IProps) => {
  const { indexUiState, setIndexUiState } = useInstantSearch();
  const { sortBy } = indexUiState;

  const changeTimePeriod = (label?: any) => {
    const value = getValueForLabel(label);

    console.log("filtering " + value);
    // if (value) {
    //   setIndexUiState(prev => ({
    //     ...prev,
    //     sortBy: value
    //   }));
    // }
  };

  const filterableTimePeriods = getFilterableTimePeriods();

  // bug in fluent UI v9 does not send or set the option value
  // it's currently only using the labels
  const getValueForLabel = (label?: string) => {
    const option = filterableTimePeriods.find(i => i.label === label);
    return option?.value || index;
  };

  const getLabelForValue = (value: string) => {
    const option = filterableTimePeriods.find(i => i.value === value);
    return option?.label || "Relevance";
  };

  return (
    <div className="filterWithIcon">
      <DummyIcon />
      <Dropdown
        defaultSelectedOptions={[getLabelForValue(sortBy || filterableTimePeriods[0].value)]}
        root={{ style: { minWidth: "150px" } }}
        onOptionSelect={(_event, data) => changeTimePeriod(data.optionText)}
      >
        {filterableTimePeriods.map(option => (
          <Option key={option.value}>{option.label}</Option>
        ))}
      </Dropdown>
    </div>
  );
};

const DummyIcon = () => {
  return <span style={{ width: "24px" }}></span>;
};
