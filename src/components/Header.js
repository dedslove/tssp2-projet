import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="school-name">CNFSDP</h1>
        <nav className="main-nav">
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#a-propos">À Propos</a></li>
            <li className="dropdown">
              <a href="#formations" className="dropbtn">Formations</a>
              <div className="dropdown-content">
                <a href="#premier-cycle">Premier Cycle</a>
                <a href="#deuxieme-cycle">Deuxième Cycle</a>
                <a href="#troisieme-cycle">Troisième Cycle</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#examens-concours" className="dropbtn">Examens & Concours</a>
              <div className="dropdown-content">
                <a href="#sujets-examens">Sujets Examens & Concours</a>
                <a href="#rapports-stage">Rapports de Stage TSSP</a>
              </div>
            </li>
            <li><a href="#evenements">Évènements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
