import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Formations from './components/Formations';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main>
          <Intro />
          <Formations />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
