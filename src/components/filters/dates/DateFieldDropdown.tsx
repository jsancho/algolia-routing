import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { getFilterableDates } from "data/dataFields";
import { CalendarLtr24Regular } from "@fluentui/react-icons";
import { useState } from "react";

interface IProps {
  index: string;
  onChangeDateField: (value: string) => void;
}

export const DateFieldDropdown = (props: IProps) => {
  const { index, onChangeDateField } = props;

  const [dateField, setDateField] = useState("dueDate");
  const filterableDates = getFilterableDates(index, ["dueDate", "created"]);

  const changeDateFilter = (label?: any) => {
    const value = getValueForLabel(label);
    setDateField(value);
    onChangeDateField(value);
  };

  // bug in fluent UI v9 does not send or set the option value
  // it's currently only using the labels
  const getValueForLabel = (label?: string) => {
    const option = filterableDates.find(i => i.label === label);
    return option!.value;
  };

  const getLabelForValue = (value: string) => {
    const option = filterableDates.find(i => i.value.startsWith(value));
    return option!.value;
  };

  return (
    <div className="filterWithIcon">
      <CalendarLtr24Regular />
      <Dropdown
        defaultSelectedOptions={[getLabelForValue(dateField || filterableDates[0].value)]}
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
