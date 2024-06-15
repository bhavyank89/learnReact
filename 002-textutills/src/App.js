import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleStyle = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleStyle} navTitle="TitleUtills" homeTilte="Home" aboutTitle="About" searchTitle="Search" />
      <TextForm mode={mode} heading="Enter your text to analysis below :"/>
      {/* <About mode={mode} aboutTitle="About Us" /> */}
    </>
  );
}

export default App;
