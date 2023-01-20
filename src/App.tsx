import { Navigate, Route, Routes } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";
import { AlgoliaContainer } from "./components/AlgoliaContainer";
import "./App.css";

const sections = ["stays", "workjobs"];

function App() {
  return (
    <div className="app">
      <NavMenu sections={sections} />
      <Routes>
        <Route path="/" element={<Navigate to={sections[0]} />} />
        {sections.map(section => {
          return <Route path={`/${section}`} element={<AlgoliaContainer index={section} />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
