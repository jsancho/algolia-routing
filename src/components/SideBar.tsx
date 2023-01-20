import { DynamicWidgets, SortBy } from "react-instantsearch-hooks-web";
import Facet from "./Facet";

interface IProps {
  section: string;
}

export const SideBar = ({ section }: IProps) => {
  const getSortItems = (index: string) => {
    return [
      { label: "Relevance", value: index },
      {
        label: "Priority (asc)",
        value: `${index}_priority_asc`
      },
      {
        label: "Priority (desc)",
        value: `${index}_priority_desc`
      }
    ];
  };

  const sortItems = getSortItems(section);

  return (
    <aside className="aside">
      <SortBy items={sortItems} />
      <DynamicWidgets>
        <Facet title="Status" attribute={"status"} />
        <Facet title="Model" attribute={"model"} />
      </DynamicWidgets>
    </aside>
  );
};
