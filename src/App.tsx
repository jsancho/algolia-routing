import { Nav } from "./components/Nav";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { useState } from "react";
import { Hits } from "./components/Hits";
import { history } from "instantsearch.js/es/lib/routers";
import "./App.css";
import simple from "./lib/simple";

const searchClient = algoliasearch("14LH54VIYV", "20ec51f3a8dd72e5d6a6e0e79278dbde");

const initialIndexName = "stays";

const routing = {
  router: history(),
  stateMapping: simple()
};

function App() {
  const [indexName, setIndexName] = useState(initialIndexName);

  return (
    <div className="App">
      <Nav setIndexName={setIndexName} />
      <InstantSearch indexName={initialIndexName} searchClient={searchClient} routing={routing}>
        {/* <Configure index={indexName} /> */}
        <Hits section={indexName} />
      </InstantSearch>
    </div>
  );
}

export default App;
