import { Checkbox } from "@fluentui/react-components";
import {
  useInstantSearch,
  useRefinementList,
  UseRefinementListProps
} from "react-instantsearch-hooks-web";

export type RefinementListProps = React.ComponentProps<"div"> &
  UseRefinementListProps & {
    attribute: string;
    title: string;
  };

const RefinementList = (props: RefinementListProps) => {
  const { attribute } = props;
  const sortBy = props.sortBy || ["count", "name:asc"];

  const { indexUiState, setIndexUiState } = useInstantSearch();

  const { items: facets, refine } = useRefinementList({ ...props, sortBy });
  const title = attribute.toUpperCase();

  const renderCheckbox = () => {
    return facets.map(facet => (
      <Checkbox
        id={facet.value}
        key={facet.value}
        label={`${facet.label} (${facet.count})`}
        checked={facet.isRefined}
        onChange={() => {
          // refine(facet.value);

          setIndexUiState(prev => {
            const attributeFacets = prev.refinementList?.[attribute];

            if (!attributeFacets) {
              return {
                ...prev,
                refinementList: {
                  ...prev.refinementList,
                  [attribute]: [facet.value]
                }
              };
            }

            const updatedList = attributeFacets?.includes(facet.value)
              ? [...prev.refinementList![attribute].filter(v => v !== facet.value)]
              : [...prev.refinementList![attribute], facet.value];

            return {
              ...prev,
              refinementList: {
                ...prev.refinementList,
                [attribute]: updatedList
              }
            };
          });
        }}
        root={{ style: { display: "flex" } }}
      />
    ));
  };

  return (
    <>
      <h3>{title}</h3>
      {facets.length > 0 && renderCheckbox()}
    </>
  );
};

export default RefinementList;
