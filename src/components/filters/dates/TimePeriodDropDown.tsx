import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { getFilterableTimePeriods } from "data/dataFields";
import { TimePeriod } from "data/timeStamps";
import { useState } from "react";
import { useInstantSearch } from "react-instantsearch-hooks-web";

interface IProps {
  index: string;
  onChangeTimePeriod: (value: TimePeriod) => void;
}

export const TimePeriodDropDown = (props: IProps) => {
  const { index, onChangeTimePeriod } = props;

  const [timePeriod, setTimePeriod] = useState("today");

  const changeTimePeriod = (label?: any) => {
    const value = getValueForLabel(label);
    setTimePeriod(value);
    onChangeTimePeriod(value as TimePeriod);
  };

  const filterableTimePeriods = getFilterableTimePeriods();

  // bug in fluent UI v9 does not send or set the option value
  // it's currently only using the labels
  const getValueForLabel = (label?: string) => {
    const option = filterableTimePeriods.find(i => i.label === label);
    return option!.value;
  };

  const getLabelForValue = (value: string) => {
    const option = filterableTimePeriods.find(i => i.value === value);
    return option!.label;
  };

  return (
    <div className="filterWithIcon">
      <DummyIcon />
      <Dropdown
        defaultSelectedOptions={[getLabelForValue(timePeriod || filterableTimePeriods[0].value)]}
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
