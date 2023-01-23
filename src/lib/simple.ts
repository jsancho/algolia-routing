import type { StateMapping, UiState } from "instantsearch.js/es/types";

// This routing logic can be used to customise the URLs parsing and serialisation used by Algolia
// borrowed from
// https://github.com/algolia/instantsearch.js/blob/c60dbe02b87b22a8ecd6e9ca880c0f1afefcdf71/packages/instantsearch.js/src/lib/stateMappings/simple.ts

// function getIndexStateWithoutConfigure<TIndexUiState extends IndexUiState>(
//   uiState: TIndexUiState
// ): Omit<TIndexUiState, "configure"> {
//   const { configure, ...trackedUiState } = uiState;
//   return trackedUiState;
// }

export default function simpleStateMapping<TUiState extends UiState = UiState>(): StateMapping<
  TUiState,
  TUiState
> {
  return {
    stateToRoute(uiState) {
      const route = Object.keys(uiState).reduce(
        (state, indexId) => ({
          ...state,
          [indexId]: {
            ...uiState[indexId]
          }
        }),
        {} as TUiState
      );

      // console.log(`2 - changing url (UiState)=> ${JSON.stringify(uiState)}`);
      // console.log(`route ${JSON.stringify(route)}`);
      return route;
    },
    routeToState(routeState = {} as TUiState) {
      const result = Object.keys(routeState).reduce(
        (state, indexId) => ({
          ...state,
          [indexId]: routeState[indexId]
        }),
        {} as TUiState
      );
      // console.log(`0 - parsing url to state=> ${JSON.stringify(routeState)}`);
      return result;
    }
  };
}
