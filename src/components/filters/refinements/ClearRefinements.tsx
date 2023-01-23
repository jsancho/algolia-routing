import { Button } from "@fluentui/react-components";
import { Delete24Regular } from "@fluentui/react-icons";
import { useClearRefinements, UseClearRefinementsProps } from "react-instantsearch-hooks-web";

export const ClearRefinements = (props: UseClearRefinementsProps) => {
  const { refine } = useClearRefinements(props);

  const onClear = () => {
    refine();
  };

  return (
    <Button onClick={onClear} icon={<Delete24Regular />} style={{ marginLeft: "6px" }}>
      Clear Refinements
    </Button>
  );
};
