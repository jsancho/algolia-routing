import { useHits } from "react-instantsearch-hooks-web";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import "./layout.css";
import SearchBar from "./SearchBar";
import { FiltersToggle } from "./FiltersToggle";

interface IProps {
  index: string;
}

export const Layout = (props: IProps) => {
  const { index } = props;

  const hits = useHits();

  return (
    <div>
      <Header section={index} hitCount={hits.results?.nbHits || 0}>
        <SearchBar />
        <FiltersToggle />
      </Header>
      <main className="main">
        <SideBar index={index} />
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
