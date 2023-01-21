import { DynamicWidgets } from "react-instantsearch-hooks-web";
import Facet from "./Facet";
import { SortByDropDown } from "./SortByDropDown";
import "./sidebar.css";

interface IProps {
  index: string;
}

export const SideBar = ({ index }: IProps) => {
  return (
    <aside className="aside">
      <SortByDropDown index={index} />
      <DynamicWidgets>
        <Facet title="Status" attribute={"status"} />
        <Facet title="Model" attribute={"model"} />
      </DynamicWidgets>
    </aside>
  );
};
