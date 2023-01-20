import { DynamicWidgets, useHits } from "react-instantsearch-hooks-web";
import SearchBar from "./SearchBar";
import Facet from "./Facet";
import { SortBy } from "react-instantsearch-hooks-web";
import "./hits.css";

const getSortItems = (index: string) => {
  return [
    { label: "Relevance", value: index },
    {
      label: "Priority (asc)",
      value: `${index}_priority_asc`,
    },
    {
      label: "Priority (desc)",
      value: `${index}_priority_desc`,
    },
  ];
};

interface IProps {
  section: string;
}

export const Hits = ({ section }: IProps) => {
  const hits = useHits();

  const items = getSortItems(section);

  return (
    <div>
      <section className="header">
        <h2>
          {section} - {hits.results?.nbHits}
        </h2>
        <SearchBar />
      </section>
      <main className="main">
        <aside className="aside">
          <SortBy items={items} />
          <DynamicWidgets>
            <Facet title="Status" attribute={"status"} />
            <Facet title="Model" attribute={"model"} />
          </DynamicWidgets>
        </aside>
        <div className="hits-container">
          {hits.hits.map((hit: any, index) => {
            return (
              <div className="hit" key={index}>
                {hit.vin} - {hit.status} ({hit.priority})
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
