import React, { useState, useEffect } from 'react';
import './Intro.css';

const SLIDE_INTERVAL_MS = 5000;

const BACKGROUND_SLIDES = [
  {
    src: `${process.env.PUBLIC_URL}/images/CNFSDP.jpg`,
    alt: 'Bâtiments du CNFSDP',
  },
  {
    src: `${process.env.PUBLIC_URL}/images/TSSP2.jpeg`,
    alt: 'Étudiants et activités TSSP',
  },
];

const Intro = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="intro" id="accueil" aria-label="Accueil">
      <div className="intro-frame">
        <div className="intro-bg" aria-hidden="true">
          <div
            className="intro-bg-track"
            style={{ transform: `translateX(-${activeSlide * 50}%)` }}
          >
            {BACKGROUND_SLIDES.map((slide) => (
              <div
                key={slide.src}
                className="intro-bg-slide"
                style={{ backgroundImage: `url(${slide.src})` }}
                role="img"
                aria-label={slide.alt}
              />
            ))}
          </div>
          <div className="intro-overlay" />
        </div>

        <div className="intro-content">
          <p className="intro-welcome">Bienvenue</p>
          <p className="presentation">
            sur la plateforme dédiée aux annales des sujets du concours d&apos;entrée au CNFSDP,
            Examens et Rapports de Stage des étudiants du{' '}
            <strong>Centre National de Formation en Statistique, Démographie et Planification</strong>.
          </p>
          <p className="description">
            Le CNFSDP est l&apos;organe technique en République du Congo chargé de former les cadres du secteur de la statistique,
            de la planification ainsi que de la démographie, et d&apos;assurer le renforcement des capacités des agents de l&apos;État
            en matière de statistique, planification et démographie.
            Il est le premier établissement d&apos;enseignement supérieur spécialisé dans la formation des professionnels du secteur
            de la statistique en République du Congo, anciennement connu sous le nom de
            <em> Centre d&apos;Application de la Statistique et de la Planification (CASP)</em>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
