import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import EngineeringProcess from './pages/EngineeringProcess';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import ProjectDetail from './pages/ProjectDetail';

function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollRestoration />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/engineering-process" element={<EngineeringProcess />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;