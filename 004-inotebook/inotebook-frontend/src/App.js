import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteContextProvider from './context/NoteContextProvider';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertTab = (show, message) => {
    setShowAlert(show);
    setAlertMessage(message);
    setTimeout(() => {
      setShowAlert(false)
      setAlertMessage("");
    }, 2000);
  }

  return (
    <div>
      <NoteContextProvider>
        <Router>
          <div className='sticky-top'>
            <Navbar />
            <div className='container sticky-top' style={{ marginTop: "10px", marginRight: "0px", height: "15px", padding: "0px" }}>{showAlert && <Alert alertMessage={alertMessage} />}</div>
          </div>
          <Routes>
            <Route path='/' element={<Home showAlertTab={showAlertTab} />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </NoteContextProvider>
    </div>
  )
}

export default App;
