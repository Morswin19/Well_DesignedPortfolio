import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Next from './components/Next';
import Footer from './components/Footer';
import HomeArrow from './components/HomeArrow';

// import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div id='mainwrapper'>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Next />
        <Footer />
        <HomeArrow />
      </div>
    </div>
  );
}

export default App;
