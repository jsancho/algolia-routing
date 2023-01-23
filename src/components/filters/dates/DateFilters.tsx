import { DateFieldDropdown } from "./DateFieldDropdown";
import { TimePeriodDropDown } from "./TimePeriodDropDown";

interface IProps {
  index: string;
}

export const DateFilters = ({ index }: IProps) => {
  return (
    <>
      <DateFieldDropdown index={index} />
      <TimePeriodDropDown index={index} />
    </>
  );
};
