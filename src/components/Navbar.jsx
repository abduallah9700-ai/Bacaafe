import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_SRC = '/logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <nav className="navbar-inner" id="main-nav">
          <Link to="/" className="navbar-brand" id="nav-logo">
            <img src={LOGO_SRC} alt="Bacaafe Bakery & Cafe" style={{ height: '4rem', width: 'auto', mixBlendMode: 'multiply' }} />
          </Link>

          <div className="navbar-links">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                id={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="btn-primary" id="nav-visit-btn" style={{ display: 'inline-block' }}>
            Visit Us
          </Link>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            id="hamburger-btn"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
