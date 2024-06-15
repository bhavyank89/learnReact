import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const toggleStyle = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleStyle} navTitle="TitleUtills" homeTitle="Home" aboutTitle="About" searchTitle="Search" />
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} heading="Enter your text to analyze below:" />} />
          <Route exact path="/about" element={<About mode={mode} aboutTitle="About Us" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
