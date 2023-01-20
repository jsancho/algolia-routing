import { useState } from "react";
import "./App.css";
import { Button, Divider } from "@fluentui/react-components";
import { ArrowStepIn24Regular } from "@fluentui/react-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Algolia Demo</h1>
      <div className="card">
        <Button
          appearance="primary"
          onClick={() => setCount((count) => count + 1)}
        >
          <ArrowStepIn24Regular />
          Clicked {count} times
        </Button>
      </div>
    </div>
  );
}

export default App;
