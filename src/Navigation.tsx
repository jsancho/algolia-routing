import { Navigate, Route, Routes } from "react-router-dom";
import { NavMenu } from "components/layout/NavMenu";
import { AlgoliaContainer } from "./AlgoliaContainer";
import { history } from "instantsearch.js/es/lib/routers";
import simple from "lib/simple";
import algoliasearch from "algoliasearch";
import "./navigation.css";

const indexes = ["stays", "workjobs"];

const routing = {
  router: history(),
  stateMapping: simple()
};

const client = algoliasearch("14LH54VIYV", "20ec51f3a8dd72e5d6a6e0e79278dbde");

function Navigation() {
  return (
    <div className="nav-container">
      <NavMenu indexes={indexes} />
      <Routes>
        <Route path="/" element={<Navigate to={indexes[0]} />} />
        {indexes.map(index => {
          return (
            <Route
              key={`route-${index}`}
              path={`/${index}`}
              element={<AlgoliaContainer index={index} client={client} routing={routing} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default Navigation;
