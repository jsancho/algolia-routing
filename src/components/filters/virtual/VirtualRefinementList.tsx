import { useEffect } from "react";
import {
  RefinementListProps,
  useInstantSearch,
  useRefinementList
} from "react-instantsearch-hooks-web";

export const VirtualRefinementList = (props: RefinementListProps) => {
  const sortBy = props.sortBy || ["count", "name:asc"];

  const {
    indexUiState: { refinementList },
    setIndexUiState
  } = useInstantSearch();
  const { items: facets, refine } = useRefinementList({ ...props, sortBy });

  useEffect(() => {
    console.log("readjusting facets");
    console.log(refinementList);
  }, [refinementList]);
  return null;
};
