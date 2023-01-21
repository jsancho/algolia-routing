import { useHits } from "react-instantsearch-hooks-web";
import "./hits.css";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
interface IProps {
  index: string;
}

export const Hits = (props: IProps) => {
  const { index } = props;

  const hits = useHits();

  return (
    <div>
      <Header section={index} hitCount={hits.results?.nbHits || 0} />
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
