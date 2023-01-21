import { DynamicWidgets } from "react-instantsearch-hooks-web";
import { SortByDropDown } from "components/sortBy/SortByDropDown";
import Facet from "./Facet";
import "./filtersSideBar.css";

interface IProps {
  index: string;
}

export const FiltersSideBar = ({ index }: IProps) => {
  return (
    <aside className="filters">
      <SortByDropDown index={index} />
      {/* TODO: Add clear refinements button */}
      <DynamicWidgets>
        <Facet title="Status" attribute={"status"} />
        <Facet title="Model" attribute={"model"} />
      </DynamicWidgets>
    </aside>
  );
};
