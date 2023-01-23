import { useEffect } from "react";
import { useConfigure, useInstantSearch } from "react-instantsearch-hooks-web";

export const VirtualDateFilters = () => {
  const { indexUiState } = useInstantSearch();

  const { refine } = useConfigure({});

  useEffect(() => {
    refine({ filters: indexUiState.configure?.filters });
  }, [indexUiState.configure?.filters]);

  return null;
};
