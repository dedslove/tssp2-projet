import React, { useState, useEffect, useCallback } from 'react';
import { EXAM_DOCUMENTS, STAGE_DOCUMENTS } from '../config/documents';
import { buildDocumentLink } from '../utils/googleDrive';
import { buildWhatsAppLink, DEFAULT_STAGE_WHATSAPP_MESSAGE } from '../utils/whatsapp';
import './Formations.css';

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="download-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
      />
    </svg>
  );
}

function DocumentDownloadButton({ href }) {
  const docReady = href && href !== '#' && href.includes('drive.google.com');

  return (
    <a
      href={docReady ? href : undefined}
      className={`download-btn${docReady ? '' : ' is-pending'}`}
      target={docReady ? '_blank' : undefined}
      rel={docReady ? 'noopener noreferrer' : undefined}
      title={
        docReady
          ? 'Télécharger ou ouvrir le document sur Google Drive'
          : 'Ajoutez le lien Google Drive dans src/config/documents.js'
      }
      onClick={!docReady ? (e) => e.preventDefault() : undefined}
    >
      <DownloadIcon />
      <span>{docReady ? 'Télécharger le document' : 'Document à configurer'}</span>
    </a>
  );
}

function ExamDocumentCard({ title, description, href }) {
  return (
    <li className="report-grid-item">
      <article className="report-card">
        <div className="report-card-info">
          <span className="report-grid-icon" aria-hidden="true">PDF</span>
          <strong>{title}</strong>
          <span className="report-card-desc">{description}</span>
        </div>
        <div className="report-card-actions report-card-actions--single">
          <DocumentDownloadButton href={href} />
        </div>
      </article>
    </li>
  );
}

function StageReportCard({ title, description, href, whatsappNumber, whatsappMessage }) {
  const message = whatsappMessage || DEFAULT_STAGE_WHATSAPP_MESSAGE;
  const whatsappHref = buildWhatsAppLink(whatsappNumber, message);
  const whatsappReady = Boolean(whatsappHref);

  return (
    <li className="report-grid-item">
      <article className="report-card">
        <div className="report-card-info">
          <span className="report-grid-icon" aria-hidden="true">PDF</span>
          <strong>{title}</strong>
          <span className="report-card-desc">{description}</span>
        </div>

        <div className="report-card-actions">
          <DocumentDownloadButton href={href} />

          <a
            href={whatsappReady ? whatsappHref : undefined}
            className={`whatsapp-btn${whatsappReady ? '' : ' is-pending'}`}
            target={whatsappReady ? '_blank' : undefined}
            rel={whatsappReady ? 'noopener noreferrer' : undefined}
            title={
              whatsappReady
                ? 'Ouvrir WhatsApp avec un message prérempli'
                : 'Ajoutez le numéro WhatsApp dans src/config/documents.js'
            }
            onClick={!whatsappReady ? (e) => e.preventDefault() : undefined}
          >
            <WhatsAppIcon />
            <span className="whatsapp-btn-text">Écrire à l&apos;ancien(ne)</span>
          </a>
        </div>
      </article>
    </li>
  );
}

const EXAM_LINKS = EXAM_DOCUMENTS.map((doc) => ({
  ...doc,
  href: buildDocumentLink(doc.driveFileId),
}));

const mapStageReports = (docs) =>
  docs.map((doc) => ({
    ...doc,
    href: buildDocumentLink(doc.driveFileId),
    whatsappMessage: doc.whatsappMessage || DEFAULT_STAGE_WHATSAPP_MESSAGE,
  }));

const STAGE_REPORTS = {
  tssp: mapStageReports(STAGE_DOCUMENTS.tssp),
  lsp: mapStageReports(STAGE_DOCUMENTS.lsp),
};

function Formations() {
  const [activeTab, setActiveTab] = useState('examens');
  const [selectedOption, setSelectedOption] = useState('tssp');

  const syncFromHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash === '#rapports-stage') {
      setActiveTab('rapports');
    } else if (hash === '#sujets-examens' || hash === '#ressources' || hash === '#examens-concours') {
      setActiveTab('examens');
    }
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [syncFromHash]);

  const openTab = (tab) => {
    setActiveTab(tab);
    window.location.hash = tab === 'examens' ? '#sujets-examens' : '#rapports-stage';
  };

  const filteredReports = selectedOption ? STAGE_REPORTS[selectedOption] : [];

  return (
    <section className="formations" id="ressources">
      <div className="container">
        <header className="formations-header">
          <h2 className="section-titre">Sujets Concours et Rapports de Stage</h2>
          <div className="separateur" />
          <p className="section-sous-titre">
            Documents hébergés sur Google Drive — cliquez pour ouvrir ou télécharger
          </p>
        </header>

        <nav className="tabs" role="tablist" aria-label="Types de documents">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'examens'}
            className={activeTab === 'examens' ? 'active' : ''}
            onClick={() => openTab('examens')}
          >
            Nos Sujets Examen et Concours ({EXAM_LINKS.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'rapports'}
            className={activeTab === 'rapports' ? 'active' : ''}
            onClick={() => openTab('rapports')}
          >
            Nos Rapports de Stage (
            {STAGE_DOCUMENTS.tssp.length + STAGE_DOCUMENTS.lsp.length})
          </button>
        </nav>

        <article className="tab-content" role="tabpanel">
          {activeTab === 'examens' && (
            <div className="examens-concours" id="sujets-examens">
              <h3>Sujets d&apos;Examen et Concours</h3>
              <p className="tab-intro">
                Ici, vous trouverez les sujets des examens et concours d&apos;entrée au CNFSDP.
              </p>
              <p className="reports-option-label">
                <strong>{EXAM_LINKS.length}</strong> sujet{EXAM_LINKS.length > 1 ? 's' : ''} disponible
                {EXAM_LINKS.length > 1 ? 's' : ''}
                <span className="reports-grid-hint">
                  {' '}
                  ({Math.ceil(EXAM_LINKS.length / 4)} ligne
                  {Math.ceil(EXAM_LINKS.length / 4) > 1 ? 's' : ''} de 4)
                </span>
              </p>
              <ul className="reports-grid">
                {EXAM_LINKS.map((link) => (
                  <ExamDocumentCard key={link.title} {...link} />
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'rapports' && (
            <div className="rapports-stage" id="rapports-stage">
              <h3>Rapports de Stage des étudiants</h3>
              <p className="tab-intro">
                Découvrez les rapports de stage de nos étudiants, classés par option TSSP ou LSP.
              </p>
              <div className="option-switch" role="tablist" aria-label="Option de formation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedOption === 'tssp'}
                  className={selectedOption === 'tssp' ? 'active' : ''}
                  onClick={() => setSelectedOption('tssp')}
                >
                  TSSP ({STAGE_DOCUMENTS.tssp.length} rapports)
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedOption === 'lsp'}
                  className={selectedOption === 'lsp' ? 'active' : ''}
                  onClick={() => setSelectedOption('lsp')}
                >
                  LSP ({STAGE_DOCUMENTS.lsp.length} rapports)
                </button>
              </div>

              <p className="reports-option-label">
                Option <strong>{selectedOption.toUpperCase()}</strong> —{' '}
                <strong>{filteredReports.length}</strong> rapport
                {filteredReports.length > 1 ? 's' : ''} de stage
                <span className="reports-grid-hint">
                  {' '}
                  ({Math.ceil(filteredReports.length / 4)} ligne
                  {Math.ceil(filteredReports.length / 4) > 1 ? 's' : ''} de 4)
                </span>
              </p>
              <ul className="reports-grid">
                {filteredReports.map((report) => (
                  <StageReportCard key={report.title} {...report} />
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default Formations;
