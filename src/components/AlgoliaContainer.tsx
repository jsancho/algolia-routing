import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { Hits } from "./Hits";
import { history } from "instantsearch.js/es/lib/routers";
import simple from "../lib/simple";

interface IProps {
  index: string;
}

const searchClient = algoliasearch("14LH54VIYV", "20ec51f3a8dd72e5d6a6e0e79278dbde");

const routing = {
  router: history(),
  stateMapping: simple()
};

export const AlgoliaContainer = ({ index }: IProps) => {
  return (
    <InstantSearch indexName={index} searchClient={searchClient} routing={routing}>
      {/* <Configure index={indexName} /> */}
      <Hits section={index} />
    </InstantSearch>
  );
};
