import React from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    { src: '/images/salle.jpg', alt: 'Salle de cours' },
    { src: '/images/batiment cnfsdp.jpeg', alt: 'Bâtiment CNFSDP' },
    { src: '/images/avis 1.jpg', alt: 'Avis de concours' },
    { src: '/images/concours2025.jpeg', alt: 'Concours 2025' },
    { src: '/images/DSC_4434.jpeg', alt: 'Événement CNFSDP' },
    { src: '/images/images (1).png', alt: 'Étudiant CASP' },
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h2>Notre Galerie Photo</h2>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
