import { DynamicWidgets } from "react-instantsearch-hooks-web";
import { SortByDropDown } from "components/filters/sortBy/SortByDropDown";
import { DateFilters } from "./dates/DateFilters";
import Facet from "./Facet";
import "./filters.css";

interface IProps {
  index: string;
}

export const FiltersSideBar = ({ index }: IProps) => {
  return (
    <aside className="sidebar">
      <div className="filters">
        <DateFilters index={index} />
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
