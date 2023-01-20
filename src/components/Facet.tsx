import { Checkbox } from "@fluentui/react";
import { useRefinementList } from "react-instantsearch-hooks-web";

type FacetProps = {
  attribute: string;
  title: string;
};
const Facet = (props: FacetProps) => {
  const { items, refine } = useRefinementList({ ...props });
  const title = props.attribute.toUpperCase();

  const renderCheckbox = () => {
    return items.map((item) => (
      <Checkbox
        id={item.value}
        key={item.value}
        label={`${item.label} (${item.count})`}
        checked={item.isRefined}
        onChange={() => {
          refine(item.value);
        }}
        styles={{ root: { marginBottom: "2px" } }}
      />
    ));
  };

  return (
    <>
      <h3>{title}</h3>
      {items.length > 0 && renderCheckbox()}
    </>
  );
};

export default Facet;
