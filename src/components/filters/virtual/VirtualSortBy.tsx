import { useEffect } from "react";
import { useInstantSearch, useSortBy } from "react-instantsearch-hooks-web";
import { SortByItem } from "instantsearch.js/es/connectors/sort-by/connectSortBy";

interface ISortByProps {
  sortOptions: SortByItem[];
}

export const VirtualSortBy = (props: ISortByProps) => {
  const { sortOptions } = props;

  const { refine } = useSortBy({
    items: sortOptions
  });

  const {
    indexUiState: { sortBy }
  } = useInstantSearch();

  useEffect(() => {
    if (sortBy) {
      refine(sortBy);
    }
  }, [sortBy]);

  return null;
};
