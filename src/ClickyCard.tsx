import { Button, Divider } from "@fluentui/react-components";
import { ArrowStepIn24Regular } from "@fluentui/react-icons";
import { useState } from "react";
export const ClickyCard = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Button
        appearance="primary"
        onClick={() => setCount((count) => count + 1)}
      >
        <ArrowStepIn24Regular />
        Clicked {count} times
      </Button>
    </div>
  );
};
