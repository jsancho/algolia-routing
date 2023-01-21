import { Dropdown, Option } from "@fluentui/react-components/unstable";
import { useInstantSearch } from "react-instantsearch-hooks-web";
import { getSortItems } from "../../data/getSortItems";
interface IProps {
  index: string;
}

export const SortByDropDown = ({ index }: IProps) => {
  const { indexUiState, setIndexUiState } = useInstantSearch();
  const { sortBy } = indexUiState;

  const changeSort = (label?: any) => {
    const value = getValueForLabel(label);
    if (value) {
      setIndexUiState(prev => ({
        ...prev,
        sortBy: value
      }));
    }
  };

  const sortItems = getSortItems(index);

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
    <Dropdown
      defaultSelectedOptions={[getLabelForValue(sortBy || index)]}
      root={{ style: { minWidth: "150px" } }}
      onOptionSelect={(_event, data) => changeSort(data.optionText)}
    >
      {sortItems.map(option => (
        <Option key={option.value}>{option.label}</Option>
      ))}
    </Dropdown>
  );
};
