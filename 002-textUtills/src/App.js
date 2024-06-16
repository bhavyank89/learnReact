import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [webMode, setWebMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleWebMode = () => {
    if (webMode === "light") {
      setWebMode("dark");
      document.body.style.backgroundColor = "#0C0C0C";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setWebMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* With out react-router-dom */}
      {/* <Navbar webMode={webMode} toggleWebMode={toggleWebMode} title1="textUtills" title2="Home" title3="AboutUs" /> */}
      {/* <Alert alert={alert} /> */}
      {/* <About aboutTitle="About Us" showAlert={showAlert} /> */}
      {/* <Home webMode={webMode} showAlert={showAlert} /> */}

      {/* With react-router-dom */}
      <BrowserRouter>
        <Navbar webMode={webMode} toggleWebMode={toggleWebMode} title1="textUtills" title2="Home" title3="AboutUs" />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<Home webMode={webMode} showAlert={showAlert} />} />
        </Routes>
        <Routes>
          <Route path='/about' element={<About aboutTitle="About Us" showAlert={showAlert} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
