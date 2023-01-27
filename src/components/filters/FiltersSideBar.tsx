import { DynamicWidgets } from "react-instantsearch-hooks-web";
import { SortByDropDown } from "components/filters/sortBy/SortByDropDown";
import { DateFilters } from "./dates/DateFilters";
import RefinementList from "./refinements/RefinementList";
import { ClearRefinements } from "./refinements/ClearRefinements";
import { Divider } from "@fluentui/react-components";
import "./filters.css";

interface IProps {
  index: string;
  showFilters: boolean;
}

export const FiltersSideBar = ({ index, showFilters }: IProps) => {
  return (
    <aside className="sidebar" style={{ display: showFilters ? "block" : "none" }}>
      <div className="filters">
        <DateFilters index={index} />
        <Spacer />
        <SortByDropDown index={index} />
      </div>
      <Spacer />
      <ClearRefinements />
      <DynamicWidgets>
        <RefinementList title="Status" attribute="status" />
        <RefinementList title="Model" attribute="model" />
      </DynamicWidgets>
    </aside>
  );
};

const Spacer = () => {
  return <Divider style={{ marginBottom: "8px" }} />;
};
