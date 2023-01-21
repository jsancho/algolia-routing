import { InstantSearch } from "react-instantsearch-hooks-web";
import { Layout } from "components/layout/Layout";
import { VirtualSortBy } from "components/virtual/VirtualSortBy";
import { getSortItems } from "data/getSortItems";
import { RouterProps } from "instantsearch.js/es/middlewares";
import { UiState } from "instantsearch.js";
import { SearchClient } from "algoliasearch";

interface IProps {
  index: string;
  client: SearchClient;
  routing: RouterProps<UiState, UiState>;
}

export const AlgoliaContainer = ({ index, client, routing }: IProps) => {
  const sortOptions = getSortItems(index);

  return (
    <InstantSearch indexName={index} searchClient={client} routing={routing}>
      {/* Add virtualised date filter dropdowns */}
      {/* Add virtualised refinement list */}
      <VirtualSortBy sortOptions={sortOptions} />
      <Layout index={index} />
    </InstantSearch>
  );
};
