// External libraries
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header navbar navbar-expand navbar-dark">
      <div className="container flex-column flex-md-row gap-2">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <i className="bi bi-camera-reels-fill"></i>
          Catálogo de Filmes
        </Link>

        <ul className="navbar-nav flex-wrap justify-content-center gap-1">
          <li className="nav-item">
            <NavLink to="/" end className="nav-link">
              <i className="bi bi-house me-1"></i>
              Início
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create" className="nav-link">
              <i className="bi bi-plus-circle me-1"></i>
              Criar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/update" className="nav-link">
              <i className="bi bi-pencil-square me-1"></i>
              Alterar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/delete" className="nav-link">
              <i className="bi bi-trash me-1"></i>
              Apagar
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
