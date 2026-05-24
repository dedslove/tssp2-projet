import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#sujets-examens', label: 'Sujets & Concours' },
  { href: '#rapports-stage', label: 'Rapports de stage' },
  { href: '#contact', label: 'Contact' },
];

const LOGO_SRC = `${process.env.PUBLIC_URL}/images/cnfsdp-logo.png`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#accueil');

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#accueil');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-bar">
        <a href="#accueil" className="brand-zone" onClick={handleNavClick}>
          <img
            src={LOGO_SRC}
            alt="CNFSDP — Centre National de Formation en Statistique, Démographie et Planification"
            className="brand-logo"
          />
        </a>

        <div className="nav-zone">
          <button
            type="button"
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Navigation principale"
          >
            <ul>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeHash === href ? 'is-active' : ''}
                    onClick={handleNavClick}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
