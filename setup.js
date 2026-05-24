const fs = require('fs');
const path = require('path');

const dir = './src/components';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(path.join(dir, 'Navbar.js'), `import React from 'react';
function Navbar() {
  const scrollVers = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav style={{backgroundColor:'#003f7f',padding:'0 30px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,zIndex:1000,boxShadow:'0 2px 8px rgba(0,0,0,0.3)',flexWrap:'wrap'}}>
      <div style={{color:'#fff',fontSize:'1.1rem',fontWeight:'700',padding:'15px 0'}}>
        CNFSDP
        <span style={{color:'#f5a623',display:'block',fontSize:'0.75rem',fontWeight:'400'}}>Centre National de Formation en Statistique, Démographie et Planification</span>
      </div>
      <div style={{display:'flex',gap:'5px',flexWrap:'wrap'}}>
        {[{label:'Accueil',id:'accueil'},{label:'Formations',id:'formations'},{label:'Galerie',id:'galerie'},{label:'Documents',id:'documents'},{label:'Contact',id:'footer'}].map((item)=>(
          <span key={item.id} onClick={()=>scrollVers(item.id)} style={{color:'#fff',padding:'8px 14px',borderRadius:'4px',fontSize:'0.9rem',cursor:'pointer'}}>{item.label}</span>
        ))}
      </div>
    </nav>
  );
}
export default Navbar;`);

fs.writeFileSync(path.join(dir, 'Hero.js'), `import React from 'react';
function Hero() {
  return (
    <section id="accueil" style={{background:'linear-gradient(135deg, #003f7f 0%, #0066cc 100%)',color:'#fff',padding:'80px 30px',textAlign:'center'}}>
      <h1 style={{fontSize:'2.8rem',fontWeight:'800',marginBottom:'10px'}}>CNFSDP</h1>
      <h2 style={{fontSize:'1.2rem',fontWeight:'400',color:'#f5a623',marginBottom:'30px'}}>Centre National de Formation en Statistique, Démographie et Planification</h2>
      <div style={{width:'80px',height:'4px',backgroundColor:'#f5a623',margin:'0 auto 30px auto',borderRadius:'2px'}}></div>
      <p style={{maxWidth:'800px',margin:'0 auto 20px auto',fontSize:'1.05rem',lineHeight:'1.8',color:'#dce8f7'}}>
        Placé sous la tutelle administrative du ministère en charge de la statistique, le CNFSDP est l'organe technique en République du Congo chargé de former les cadres du secteur de la statistique, de la planification et de la démographie.
      </p>
      <div style={{display:'flex',justifyContent:'center',gap:'40px',flexWrap:'wrap',marginTop:'20px'}}>
        {[{chiffre:'N°1',texte:'Formation des statisticiens'},{chiffre:'+40 ans',texte:"D'expérience"},{chiffre:'+1000',texte:'Apprenants formés'},{chiffre:'+450',texte:'Professionnels en réseau'}].map((item,i)=>(
          <div key={i} style={{textAlign:'center'}}>
            <div style={{fontSize:'2rem',fontWeight:'800',color:'#f5a623'}}>{item.chiffre}</div>
            <div style={{fontSize:'0.85rem',color:'#dce8f7'}}>{item.texte}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Hero;`);

fs.writeFileSync(path.join(dir, 'Galerie.js'), `import React, { useState } from 'react';
const photos = [
  {src:'/images/photo1.jpg',legende:'Bâtiment principal du CNFSDP'},
  {src:'/images/photo2.jpg',legende:'Salle de cours'},
  {src:'/images/photo3.jpg',legende:'Bibliothèque'},
  {src:'/images/photo4.jpg',legende:'Laboratoire informatique'},
  {src:'/images/photo5.jpg',legende:'Cérémonie de remise de diplômes'},
  {src:'/images/photo6.jpg',legende:'Activités étudiantes'},
];
function Galerie() {
  const [photoAgrandie, setPhotoAgrandie] = useState(null);
  return (
    <section id="galerie" style={{backgroundColor:'#fff',padding:'60px 20px'}}>
      <h2 className="section-titre">Galerie Photos</h2>
      <div className="separateur"></div>
      <p className="section-sous-titre">Découvrez la vie au sein du CNFSDP en images.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',gap:'20px',maxWidth:'1000px',margin:'0 auto'}}>
        {photos.map((photo,i)=>(
          <div key={i} onClick={()=>setPhotoAgrandie(photo)} style={{cursor:'pointer',borderRadius:'8px',overflow:'hidden',boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
            <img src={photo.src} alt={photo.legende} style={{width:'100%',height:'200px',objectFit:'cover',display:'block'}} />
            <div style={{padding:'10px 14px',backgroundColor:'#003f7f',color:'#fff',fontSize:'0.85rem',textAlign:'center'}}>{photo.legende}</div>
          </div>
        ))}
      </div>
      {photoAgrandie && (
        <div onClick={()=>setPhotoAgrandie(null)} style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.85)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',zIndex:9999,cursor:'pointer'}}>
          <img src={photoAgrandie.src} alt={photoAgrandie.legende} style={{maxWidth:'90%',maxHeight:'80vh',borderRadius:'8px'}} />
          <p style={{color:'#f5a623',marginTop:'15px',fontSize:'1rem',fontWeight:'600'}}>{photoAgrandie.legende}</p>
        </div>
      )}
    </section>
  );
}
export default Galerie;`);

fs.writeFileSync(path.join(dir, 'Documents.js'), `import React from 'react';
const documents = [
  {categorie:'Textes administratifs',icone:'📁',fichiers:[{label:'Programme scolaire TSSP',url:'https://drive.google.com/file/d/REMPLACER_ID/view'},{label:'Règlement intérieur',url:'https://drive.google.com/file/d/REMPLACER_ID/view'}]},
  {categorie:'Formulaires',icone:'📝',fichiers:[{label:"Formulaire d'inscription",url:'https://drive.google.com/file/d/REMPLACER_ID/view'},{label:'Dossier de candidature',url:'https://drive.google.com/file/d/REMPLACER_ID/view'}]},
  {categorie:'Conventions et Accords',icone:'🤝',fichiers:[{label:'Convention avec les partenaires',url:'https://drive.google.com/file/d/REMPLACER_ID/view'}]},
  {categorie:'Avis et Concours',icone:'📢',fichiers:[{label:'Avis de concours 2025-2026',url:'https://drive.google.com/file/d/REMPLACER_ID/view'},{label:"Conditions d'admission",url:'https://drive.google.com/file/d/REMPLACER_ID/view'}]},
];
function Documents() {
  return (
    <section id="documents" style={{backgroundColor:'#f0f4f8',padding:'60px 20px'}}>
      <h2 className="section-titre">Documents Utiles</h2>
      <div className="separateur"></div>
      <p className="section-sous-titre">Téléchargez les documents officiels du CNFSDP.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',gap:'25px',maxWidth:'1000px',margin:'0 auto'}}>
        {documents.map((cat,ci)=>(
          <div key={ci} style={{backgroundColor:'#fff',borderRadius:'8px',boxShadow:'0 4px 12px rgba(0,0,0,0.08)',overflow:'hidden'}}>
            <div style={{backgroundColor:'#003f7f',padding:'14px 18px',display:'flex',alignItems:'center',gap:'10px'}}>
              <span style={{fontSize:'1.4rem'}}>{cat.icone}</span>
              <h3 style={{color:'#fff',fontSize:'0.95rem',fontWeight:'700',margin:0}}>{cat.categorie}</h3>
            </div>
            <div style={{padding:'15px'}}>
              {cat.fichiers.map((f,fi)=>(
                <a key={fi} href={f.url} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',marginBottom:'8px',backgroundColor:'#f8f9fa',border:'1px solid #dee2e6',borderRadius:'5px',color:'#003f7f',textDecoration:'none',fontSize:'0.9rem',fontWeight:'500'}}>
                  📥 {f.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Documents;`);

fs.writeFileSync(path.join(dir, 'Footer.js'), `import React from 'react';
function Footer() {
  const scrollVers = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer id="footer" style={{backgroundColor:'#002855',color:'#fff',padding:'50px 30px 20px 30px'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))',gap:'40px',maxWidth:'1000px',margin:'0 auto 40px auto'}}>
        <div>
          <h3 style={{color:'#f5a623',fontSize:'1rem',fontWeight:'700',marginBottom:'15px',textTransform:'uppercase'}}>CNFSDP</h3>
          <p style={{fontSize:'0.88rem',lineHeight:'1.8',color:'#b0c4de'}}>Centre National de Formation en Statistique, Démographie et Planification. Premier établissement spécialisé en statistique en République du Congo.</p>
        </div>
        <div>
          <h3 style={{color:'#f5a623',fontSize:'1rem',fontWeight:'700',marginBottom:'15px',textTransform:'uppercase'}}>Nous Contacter</h3>
          <ul style={{listStyle:'none',padding:0}}>
            {[{icone:'📍',texte:'Mpila, non loin du Bon Boeuf, Ex Agri-Congo, Brazzaville, Congo'},{icone:'📞',texte:'+242 06 534 65 60'},{icone:'✉️',texte:'contact@cnfsdp-congo.cg'}].map((item,i)=>(
              <li key={i} style={{display:'flex',gap:'10px',marginBottom:'12px',fontSize:'0.88rem',color:'#b0c4de',lineHeight:'1.6'}}>
                <span>{item.icone}</span><span>{item.texte}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{color:'#f5a623',fontSize:'1rem',fontWeight:'700',marginBottom:'15px',textTransform:'uppercase'}}>Liens Rapides</h3>
          <ul style={{listStyle:'none',padding:0}}>
            {[{label:'Accueil',id:'accueil'},{label:'Nos Formations',id:'formations'},{label:'Galerie',id:'galerie'},{label:'Documents',id:'documents'}].map((lien,i)=>(
              <li key={i} style={{marginBottom:'8px'}}>
                <span onClick={()=>scrollVers(lien.id)} style={{color:'#b0c4de',fontSize:'0.88rem',cursor:'pointer'}}>› {lien.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 style={{color:'#f5a623',fontSize:'1rem',fontWeight:'700',marginBottom:'15px',textTransform:'uppercase'}}>Réseaux Sociaux</h3>
          <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <a href="https://www.facebook.com/Casp242" target="_blank" rel="noreferrer" style={{color:'#b0c4de',textDecoration:'none',fontSize:'0.88rem'}}>📘 Facebook — CNFSDP</a>
            <a href="https://www.linkedin.com/company/centre-national-de-formation-en-statistique-demographie-et-planication/" target="_blank" rel="noreferrer" style={{color:'#b0c4de',textDecoration:'none',fontSize:'0.88rem'}}>💼 LinkedIn — CNFSDP</a>
          </div>
        </div>
      </div>
      <div style={{borderTop:'1px solid #1a3a5c',paddingTop:'20px',textAlign:'center',fontSize:'0.82rem',color:'#6a8aaa'}}>
        © 2025 CNFSDP — Brazzaville, République du Congo.
      </div>
    </footer>
  );
}
export default Footer;`);

fs.writeFileSync(path.join(dir, 'Formations.js'), `import React, { useState } from 'react';
const formations = [
  {cycle:'PREMIER CYCLE',parcours:[
    {nom:'PARCOURS TSSP',description:'Technicien Supérieur en Statistique et Planification. Formation de 2 ans sanctionnée par un BTS.',
      sujets:[{label:'Sujet Mathématiques 2023',url:'https://drive.google.com/file/d/REMPLACER_ID_1/view'},{label:'Sujet Statistiques 2023',url:'https://drive.google.com/file/d/REMPLACER_ID_2/view'}],
      rapports:[{option:'LSP (Logiciels et Systèmes de Production)',fichiers:[{label:'Rapport Jean MOUKALA 2023',url:'https://drive.google.com/file/d/REMPLACER_ID_4/view'}]},{option:'Autre Option',fichiers:[{label:'Rapport Paul NGOMA 2023',url:'https://drive.google.com/file/d/REMPLACER_ID_6/view'}]}]},
    {nom:'PARCOURS LICENCE',description:'Formation de 3 ans (LMD) sanctionnée par une Licence.',sujets:[{label:'Sujet Analyse 2023',url:'https://drive.google.com/file/d/REMPLACER_ID_8/view'}],rapports:[]},
  ]},
  {cycle:'DEUXIÈME CYCLE',parcours:[
    {nom:'PARCOURS MASTER — CYCLE NORMAL',description:'Formation Master 2 ans en Statistique.',sujets:[{label:'Sujet Économétrie 2023',url:'https://drive.google.com/file/d/REMPLACER_ID_9/view'}],rapports:[]},
    {nom:'PARCOURS MASTER — CYCLE MOYEN',description:'Formation Master spécialisée cycle moyen.',sujets:[],rapports:[]},
    {nom:'PARCOURS MASTER — CYCLE LONG',description:'Formation Master approfondie cycle long.',sujets:[],rapports:[]},
  ]},
  {cycle:'TROISIÈME CYCLE',parcours:[
    {nom:'PARCOURS DOCTORAT',description:'Formation Doctorat en Statistique, Démographie et Planification.',sujets:[],rapports:[]},
  ]},
];
function Formations() {
  const [cycleOuvert, setCycleOuvert] = useState(null);
  const [parcoursOuvert, setParcoursOuvert] = useState(null);
  const [ongletActif, setOngletActif] = useState({});
  const toggleCycle = (i) => { setCycleOuvert(cycleOuvert===i?null:i); setParcoursOuvert(null); };
  const toggleParcours = (key) => { setParcoursOuvert(parcoursOuvert===key?null:key); setOngletActif(prev=>({...prev,[key]:prev[key]||'sujets'})); };
  const setOnglet = (key,onglet) => setOngletActif(prev=>({...prev,[key]:onglet}));
  return (
    <section id="formations" style={{backgroundColor:'#f0f4f8',padding:'60px 20px'}}>
      <h2 className="section-titre">Nos Formations</h2>
      <div className="separateur"></div>
      <p className="section-sous-titre">Explorez nos cycles et accédez aux sujets et rapports de stage.</p>
      <div style={{maxWidth:'900px',margin:'0 auto'}}>
        {formations.map((cycle,ci)=>(
          <div key={ci} style={{marginBottom:'15px'}}>
            <button onClick={()=>toggleCycle(ci)} style={{width:'100%',backgroundColor:cycleOuvert===ci?'#003f7f':'#0066cc',color:'#fff',border:'none',padding:'16px 20px',fontSize:'1rem',fontWeight:'700',textAlign:'left',cursor:'pointer',borderRadius:'6px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              {cycle.cycle}<span>{cycleOuvert===ci?'▲':'▼'}</span>
            </button>
            {cycleOuvert===ci && (
              <div style={{padding:'10px 0 0 10px'}}>
                {cycle.parcours.map((p,pi)=>{
                  const key=ci+'-'+pi;
                  return (
                    <div key={pi} style={{marginBottom:'10px'}}>
                      <button onClick={()=>toggleParcours(key)} style={{width:'100%',backgroundColor:parcoursOuvert===key?'#f5a623':'#e8f0fb',color:parcoursOuvert===key?'#fff':'#003f7f',border:'1px solid #0066cc',padding:'13px 18px',fontSize:'0.95rem',fontWeight:'600',textAlign:'left',cursor:'pointer',borderRadius:'5px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        {p.nom}<span>{parcoursOuvert===key?'▲':'▼'}</span>
                      </button>
                      {parcoursOuvert===key && (
                        <div style={{backgroundColor:'#fff',border:'1px solid #ddd',borderTop:'none',borderRadius:'0 0 5px 5px',padding:'20px'}}>
                          <p style={{color:'#555',marginBottom:'20px',lineHeight:'1.7'}}>{p.description}</p>
                          <div style={{display:'flex',gap:'10px',marginBottom:'20px'}}>
                            <button onClick={()=>setOnglet(key,'sujets')} style={{padding:'9px 20px',backgroundColor:ongletActif[key]==='sujets'?'#003f7f':'#e0e0e0',color:ongletActif[key]==='sujets'?'#fff':'#333',border:'none',borderRadius:'4px',cursor:'pointer',fontWeight:'600',fontSize:'0.9rem'}}>📄 Sujets Examen et Concours</button>
                            {p.rapports.length>0 && <button onClick={()=>setOnglet(key,'rapports')} style={{padding:'9px 20px',backgroundColor:ongletActif[key]==='rapports'?'#003f7f':'#e0e0e0',color:ongletActif[key]==='rapports'?'#fff':'#333',border:'none',borderRadius:'4px',cursor:'pointer',fontWeight:'600',fontSize:'0.9rem'}}>📋 Rapports de Stage</button>}
                          </div>
                          {ongletActif[key]==='sujets' && (
                            <div>
                              {p.sujets.length===0
                                ? <p style={{color:'#999',fontStyle:'italic'}}>Aucun sujet disponible.</p>
                                : p.sujets.map((s,si)=>(
                                  <a key={si} href={s.url} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 14px',marginBottom:'8px',backgroundColor:'#f8f9fa',border:'1px solid #dee2e6',borderRadius:'4px',color:'#003f7f',textDecoration:'none',fontWeight:'500'}}>
                                    📥 {s.label}
                                  </a>
                                ))
                              }
                            </div>
                          )}
                          {ongletActif[key]==='rapports' && (
                            <div>
                              {p.rapports.map((option,oi)=>(
                                <div key={oi} style={{marginBottom:'20px'}}>
                                  <h4 style={{color:'#f5a623',marginBottom:'10px',fontSize:'0.95rem',borderLeft:'4px solid #f5a623',paddingLeft:'10px'}}>Option : {option.option}</h4>
                                  {option.fichiers.map((f,fi)=>(
                                    <a key={fi} href={f.url} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 14px',marginBottom:'8px',backgroundColor:'#f8f9fa',border:'1px solid #dee2e6',borderRadius:'4px',color:'#003f7f',textDecoration:'none',fontWeight:'500'}}>
                                      📥 {f.label}
                                    </a>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Formations;`);

console.log('Tous les fichiers créés avec succès !');