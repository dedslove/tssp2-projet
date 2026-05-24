import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Formations from './components/Formations';
import Footer from './components/Footer';
import './App.css'; // Assurez-vous de créer ce fichier pour le style global

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Intro />
        <Formations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
