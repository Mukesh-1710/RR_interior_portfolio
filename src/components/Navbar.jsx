import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import logo from '../logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const navBackground = isOpen
    ? 'bg-bg-main shadow-lg'
    : (isScrolled ? 'bg-bg-main/80 backdrop-blur-md shadow-luxury' : 'bg-bg-main/50 backdrop-blur-sm');

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBackground} ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="RR Interiors" 
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-10' : 'h-12'}`} 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm uppercase tracking-widest font-medium transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-text-primary'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            <Button to="/contact" variant="secondary" className="px-6 py-2 text-xs uppercase tracking-widest">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-bg-main shadow-2xl border-t border-black/5"
        >
          <div className="px-6 py-8 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg uppercase tracking-widest font-medium transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 w-full max-w-xs">
              <Button to="/contact" className="w-full text-center">
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

