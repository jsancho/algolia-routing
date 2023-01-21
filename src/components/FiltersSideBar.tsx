import { DynamicWidgets } from "react-instantsearch-hooks-web";
import Facet from "./Facet";
import { SortByDropDown } from "./SortByDropDown";
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
