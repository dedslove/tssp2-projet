import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="hero-title">CNFSDP</h2>
        <p className="hero-description">
          Bienvenue sur le site web officiel du Centre National de Formation en Statistique, Démographie et Planification.
          Le CNFSDP est l'organe technique en République du Congo chargé de former les cadres du secteur de la statistique, de la planification ainsi que de la démographie d'une part et d'assurer le renforcement des capacités des agents de l'État en matière de statistique, planification et Démographie. Il est le premier établissement d'enseignement supérieur spécialisé dans la formation des professionnels du secteur de la statistique en République du Congo, anciennement connu sous le nom de Centre d'Application de la Statistique et de la Planification (CASP).
        </p>
      </div>
    </section>
  );
}

export default Hero;
