import "./styles.css";
import { NavBar } from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/inicio";
import { Empresa } from "./pages/empresa";
import { Contactanos } from "./pages/contactanos";
import { Conocenos } from "./pages/conocenos";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/conocenos" element={<Conocenos />} />
        </Routes>
      </Router>
    </div>
  );
}
