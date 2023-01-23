import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { history } from "instantsearch.js/es/lib/routers";
import simple from "lib/simple";
import { Layout } from "components/layout/Layout";
import { VirtualSortBy } from "components/filters/virtual/VirtualSortBy";
import { getSortableItems } from "data/dataFields";

interface IProps {
  index: string;
}

const searchClient = algoliasearch("14LH54VIYV", "20ec51f3a8dd72e5d6a6e0e79278dbde");

const routing = {
  router: history(),
  stateMapping: simple()
};

export const AlgoliaContainer = ({ index }: IProps) => {
  const sortOptions = getSortableItems(index);

  return (
    <InstantSearch indexName={index} searchClient={searchClient} routing={routing}>
      {/* Add virtualised date filter dropdowns */}
      {/* Add virtualised refinement list */}
      <VirtualSortBy sortOptions={sortOptions} />
      <Layout index={index} />
    </InstantSearch>
  );
};
