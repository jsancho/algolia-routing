import { DynamicWidgets } from "react-instantsearch-hooks-web";
import { SortByDropDown } from "components/filters/sortBy/SortByDropDown";
import { DateFilters } from "./dates/DateFilters";
import RefinementList from "./refinements/RefinementList";
import "./filters.css";
import { ClearRefinements } from "./refinements/ClearRefinements";
import { Divider } from "@fluentui/react-components";

interface IProps {
  index: string;
}

export const FiltersSideBar = ({ index }: IProps) => {
  return (
    <aside className="sidebar">
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
