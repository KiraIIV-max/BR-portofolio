import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import EngineeringProcess from './pages/EngineeringProcess';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Skills from './pages/Skills';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/engineering-process" element={<EngineeringProcess/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;