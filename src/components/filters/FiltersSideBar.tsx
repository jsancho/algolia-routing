import { DynamicWidgets } from "react-instantsearch-hooks-web";
import { SortByDropDown } from "components/filters/sortBy/SortByDropDown";
import Facet from "./Facet";
import { DateFilter } from "components/filters/dates/DateFilter";
import { TimePeriodFilter } from "components/filters/dates/TimePeriod";
import "./filters.css";

interface IProps {
  index: string;
}

export const FiltersSideBar = ({ index }: IProps) => {
  return (
    <aside className="sidebar">
      <div className="filters">
        <DateFilter index={index} />
        <TimePeriodFilter index={index} />
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
