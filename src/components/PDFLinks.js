import React from 'react';
import './PDFLinks.css';

function PDFLinks() {
  const pdfCategories = [
    {
      title: 'Informations Générales',
      links: [
        { name: 'Programme Scolaire', url: 'https://docs.google.com/document/d/1/edit?usp=sharing' },
        { name: 'Règlement Intérieur', url: 'https://docs.google.com/document/d/2/edit?usp=sharing' },
        { name: 'Formulaire d\'Inscription', url: 'https://docs.google.com/document/d/3/edit?usp=sharing' },
      ],
    },
    {
      title: 'Examens et Concours',
      links: [
        { name: 'Sujets Examen 2021', url: 'https://drive.google.com/file/d/1Dv1NqLuBoONB61m8ya7yALC8cj-9UScw/view?usp=sharing' },
        { name: 'Concours d\'entrée 2024', url: 'https://docs.google.com/document/d/5/edit?usp=sharing' },
      ],
    },
    {
      title: 'Rapports de Stage TSSP',
      links: [
        { name: 'Rapport de Stage TSSP - Option LSP', url: 'https://docs.google.com/document/d/6/edit?usp=sharing' },
        { name: 'Rapport de Stage TSSP - Autre Option', url: 'https://docs.google.com/document/d/7/edit?usp=sharing' },
      ],
    },
  ];

  return (
    <section className="pdf-links">
      <div className="container">
        <h2>Documents Importants</h2>
        {pdfCategories.map((category, index) => (
          <div key={index} className="pdf-category">
            <h3>{category.title}</h3>
            <ul>
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PDFLinks;
