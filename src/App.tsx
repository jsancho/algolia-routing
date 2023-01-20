import { ClickyCard } from "./ClickyCard";
import { Nav } from "./components/Nav";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { useState } from "react";
import { Hits } from "./components/Hits";
import "./App.css";

const searchClient = algoliasearch(
  "14LH54VIYV",
  "20ec51f3a8dd72e5d6a6e0e79278dbde"
);

const initialIndexName = "stays";

function App() {
  const [indexName, setIndexName] = useState(initialIndexName);

  return (
    <div className="App">
      <Nav setIndexName={setIndexName} />
      <InstantSearch indexName={initialIndexName} searchClient={searchClient}>
        {/* <Configure index={indexName} /> */}
        <Hits section={indexName} />
      </InstantSearch>

      <ClickyCard />
    </div>
  );
}

export default App;
