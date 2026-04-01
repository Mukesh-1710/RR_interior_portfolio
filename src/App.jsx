import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import InteriorDesignMadurai from './pages/InteriorDesignMadurai';
import ModularKitchenMadurai from './pages/ModularKitchenMadurai';
import HomeInteriorsMadurai from './pages/HomeInteriorsMadurai';
import ScrollToTop from './components/ScrollToTop';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop smooth={false} />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[9999]"
        style={{ scaleX }}
      />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/interior-designers-madurai" element={<InteriorDesignMadurai />} />
            <Route path="/services/modular-kitchen-madurai" element={<ModularKitchenMadurai />} />
            <Route path="/services/home-interiors-madurai" element={<HomeInteriorsMadurai />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
