import { useEffect } from "react";
import { useConfigure, useInstantSearch } from "react-instantsearch-hooks-web";

export const VirtualDateFilters = () => {
  const { indexUiState } = useInstantSearch();

  // const hardcodedDefault = "dueDateTimeStamp: 1674428400 TO 1674514799";

  // const { refine } = useConfigure({
  //   filters: hardcodedDefault
  // });

  const { refine } = useConfigure({});

  useEffect(() => {
    console.log("filters changed!");
    console.log(JSON.stringify(indexUiState.configure));
    refine({ filters: indexUiState.configure?.filters });
  }, [indexUiState.configure?.filters]);

  return null;
};
