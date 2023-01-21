import { Navigate, Route, Routes } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";
import { AlgoliaContainer } from "./components/AlgoliaContainer";
import "./App.css";

const indexes = ["stays", "workjobs"];

function App() {
  return (
    <div className="app">
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

export default App;
