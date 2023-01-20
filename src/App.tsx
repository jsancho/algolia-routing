import { Navigate, Route, Routes } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";
import { AlgoliaContainer } from "./components/AlgoliaContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavMenu sections={["stays", "workjobs"]} />
      <Routes>
        <Route path="/" element={<Navigate to="stays" />} />
        <Route path="/">
          <Route path="stays" element={<AlgoliaContainer index="stays" />} />
          <Route path="workjobs" element={<AlgoliaContainer index="workjobs" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
