import { Route, Routes } from "react-router-dom";
import "./App.css";
import PortafolioPage from "./components/pages/portafolio/PortafolioPage";
import ProyectoFullStackPage from "./components/pages/proyecto-fullstack/ProyectoFullStackPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortafolioPage />} />
        <Route path="/proyecto-fullstack" element={<ProyectoFullStackPage />} />
      </Routes>
    </>
  );
}

export default App;
