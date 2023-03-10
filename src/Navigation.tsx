import { Navigate, Route, Routes } from "react-router-dom";
import { NavMenu } from "components/layout/NavMenu";
import { AlgoliaContainer } from "./AlgoliaContainer";
import "./navigation.css";

const indexes = ["stays", "workjobs"];

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
              element={<AlgoliaContainer index={index} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default Navigation;
