import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar navTitle="TitleUtills" homeTilte="Home" aboutTitle="About" searchTitle="Search"/>
    <TextForm heading="Enter your text to analysis below :"/>
    </>
  );
}

export default App;
