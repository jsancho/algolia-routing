import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { useSortBy } from "react-instantsearch-hooks-web";
import { getSortableItems } from "data/dataFields";
import { ArrowSort24Regular } from "@fluentui/react-icons";

interface IProps {
  index: string;
}

export const SortByDropDown = ({ index }: IProps) => {
  const sortItems = getSortableItems(index);

  const { refine, currentRefinement } = useSortBy({
    items: sortItems
  });

  const changeSort = (label?: any) => {
    const value = getValueForLabel(label);
    refine(value);
  };

  // bug in fluent UI v9 does not send or set the option value
  // it's currently only using the labels
  const getValueForLabel = (label?: string) => {
    const option = sortItems.find(i => i.label === label);
    return option?.value || index;
  };

  const getLabelForValue = (value: string) => {
    const option = sortItems.find(i => i.value === value);
    return option?.label || "Relevance";
  };

  return (
    <div className="filterWithIcon">
      <ArrowSort24Regular />
      <Dropdown
        defaultSelectedOptions={[getLabelForValue(currentRefinement || index)]}
        root={{ style: { minWidth: "150px" } }}
        onOptionSelect={(_event, data) => changeSort(data.optionText)}
      >
        {sortItems.map(option => (
          <Option key={option.value}>{option.label}</Option>
        ))}
      </Dropdown>
    </div>
  );
};
