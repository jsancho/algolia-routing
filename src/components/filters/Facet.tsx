import { Checkbox } from "@fluentui/react-components";
import { useRefinementList, UseRefinementListProps } from "react-instantsearch-hooks-web";

export type RefinementListProps = React.ComponentProps<"div"> &
  UseRefinementListProps & {
    attribute: string;
    title: string;
  };

const Facet = (props: RefinementListProps) => {
  const sortBy = props.sortBy || ["count", "name:asc"];

  const { items: facets, refine } = useRefinementList({ ...props, sortBy });
  const title = props.attribute.toUpperCase();

  const renderCheckbox = () => {
    return facets.map(facet => (
      <Checkbox
        id={facet.value}
        key={facet.value}
        label={`${facet.label} (${facet.count})`}
        checked={facet.isRefined}
        onChange={() => {
          refine(facet.value);
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

export default Facet;
