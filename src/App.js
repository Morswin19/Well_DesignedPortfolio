import React, { useState, useEffect } from 'react';
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
  let [homeArrowDisplay, allowArrow] = useState(true)

  // const refContainer = useRef()

  allowArrow = () => (window.innerWidth > 900 ? (homeArrowDisplay = true) : (homeArrowDisplay = false))

  useEffect(() => {
    window.addEventListener('resize', allowArrow)
  },[])


  return (
    <div className="App">
      <div id='mainwrapper'>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Next />
        <Footer />
        {homeArrowDisplay ? <HomeArrow /> : ''}
      </div>
    </div>
  );
}

export default App;
