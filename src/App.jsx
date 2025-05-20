import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/NavBar';
import SideBar from './components/navbar/SideBar';
import Home from './components/pages/home/Home';
import Services from './components/pages/services/Services';
import Resume from './components/pages/resume/Resume'
import Work from './components/pages/work/Work';
import Contact from './components/pages/contact/Contact';
import CustomCursor from './components/pages/cursor/CustomCursor';

function App() {
  return (

    <>
    <CustomCursor />

    <Router>
      <nav>
        <Navbar />
      </nav>

      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
