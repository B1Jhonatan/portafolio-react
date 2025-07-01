import { Route, Routes } from "react-router-dom";
import "./App.css";
import PortafolioPage from "./components/pages/portafolio/PortafolioPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortafolioPage />} />
      </Routes>
    </>
  );
}

export default App;
