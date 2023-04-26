import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contactanos">Contactanos</Link>
          </li>
          <li>
            <Link to="/conocenos">Conócenos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
