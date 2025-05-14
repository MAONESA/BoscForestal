import { Link } from 'react-router-dom';
import '../styles/nav.css';              // 👈 NUEVO

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">BOSC/FORESTAL</Link>

        <nav className="nav__links">
          <Link to="/"        className="nav__link">Inici</Link>
          <Link to="/about"   className="nav__link">Qui Som?</Link>
          <Link to="/contact" className="nav__link">Contacte</Link>
        </nav>
      </div>
    </header>
  );
}
