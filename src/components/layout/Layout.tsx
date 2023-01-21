import { useState } from "react";
import { useHits } from "react-instantsearch-hooks-web";
import { Header } from "./Header";
import SearchBar from "./SearchBar";
import { FiltersToggle } from "components/filters/FiltersToggle";
import { FiltersSideBar } from "components/filters/FiltersSideBar";
import "./layout.css";

interface IProps {
  index: string;
}

export const Layout = (props: IProps) => {
  const { index } = props;

  const hits = useHits();

  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="layout-container">
      <Header section={index} hitCount={hits.results?.nbHits || 0}>
        <SearchBar />
        <FiltersToggle showFilters={showFilters} setShowFilters={setShowFilters} />
      </Header>
      <main className="main">
        {showFilters && <FiltersSideBar index={index} />}
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
