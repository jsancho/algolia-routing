import { DynamicWidgets } from "react-instantsearch-hooks-web";
import { SortByDropDown } from "components/filters/sortBy/SortByDropDown";
import Facet from "./Facet";
import { DateFieldDropdown } from "components/filters/dates/DateFieldDropdown";
import { TimePeriodDropDown } from "components/filters/dates/TimePeriodDropDown";
import "./filters.css";

interface IProps {
  index: string;
}

export const FiltersSideBar = ({ index }: IProps) => {
  return (
    <aside className="sidebar">
      <div className="filters">
        <DateFieldDropdown index={index} />
        <TimePeriodDropDown index={index} />
        <SortByDropDown index={index} />
      </div>
      {/* TODO: Add clear refinements button */}
      <DynamicWidgets>
        <Facet title="Status" attribute={"status"} />
        <Facet title="Model" attribute={"model"} />
      </DynamicWidgets>
    </aside>
  );
};
