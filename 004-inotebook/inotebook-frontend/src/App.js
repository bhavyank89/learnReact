import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteContextProvider from './context/NoteContextProvider';
import Alert from './components/Alert';

function App() {
  const alertMessage = "Hello Testing alert";
  return (
    <div>
      <NoteContextProvider>
        <Router>
          <Navbar />
          <Alert message={alertMessage} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </NoteContextProvider>
    </div>
  )
}

export default App;
