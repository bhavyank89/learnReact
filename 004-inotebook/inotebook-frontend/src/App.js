import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteContextProvider from './context/NoteContextProvider';
import Alert from './components/Alert';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(true);

  const showAlertTab = (show, message) => {
    setShowAlert(show);
    setAlertMessage(message);
    setTimeout(() => {
      setShowAlert(false);
      setAlertMessage("");
    }, 2000);
  };

  return (
    <div>
      <NoteContextProvider>
        <Router>
          <div className='sticky-top'>
            {/* Pass props to Navbar */}
            <Navbar
              showLogin={showLogin}
              showSignup={showSignup}
              setShowLogin={setShowLogin}
              setShowSignup={setShowSignup}
            />
            {showAlert && <Alert alertMessage={alertMessage} />}

          </div>
          <Routes>
            <Route path='/' element={<Home showAlertTab={showAlertTab} />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login showAlertTab={showAlertTab} />} />
            <Route path='/signup' element={<Signup showAlertTab={showAlertTab} />} />
          </Routes>
          <Footer />
        </Router>
      </NoteContextProvider>
    </div>
  );
}

export default App;
