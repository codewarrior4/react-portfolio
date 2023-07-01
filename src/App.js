import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Main/Header';
import Footer from './components/Main/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      <Footer /> 
      </BrowserRouter>
    </div>
  )
}

export default App;
