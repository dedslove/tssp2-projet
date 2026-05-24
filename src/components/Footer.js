import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-contact">
          <h3 className="footer-heading">Nous contacter</h3>
          <div className="footer-details">
            <p>
              <span className="footer-label">Email</span>
              <a href="mailto:contact@cnfsdp-congo.cg">contact@cnfsdp-congo.cg</a>
            </p>
            <p>
              <span className="footer-label">Téléphone</span>
              <a href="tel:+242065346560">+242 06 534 65 60</a>
            </p>
            <p>
              <span className="footer-label">Adresse</span>
              Mpila, non loin du Bon Boeuf, Référence Ex Agri-Congo. Brazzaville, Congo.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-credit">
          Site web créé par les étudiants de la{' '}
          <strong>TSSP2</strong>, promotion <strong>2024-2026</strong>
        </p>
        <p className="copyright">© 2026 CNFSDP. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
