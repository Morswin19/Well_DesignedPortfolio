import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
