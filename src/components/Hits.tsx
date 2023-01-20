import { useHits } from "react-instantsearch-hooks-web";
import "./hits.css";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
interface IProps {
  section: string;
}

export const Hits = (props: IProps) => {
  const { section } = props;

  const hits = useHits();

  return (
    <div>
      <Header section={section} hitCount={hits.results?.nbHits || 0} />
      <main className="main">
        <SideBar section={section} />
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
