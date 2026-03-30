import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logo from '../logo.PNG';

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

  // We enforce the unified Navbar look globally, except the exact very top of Home hero where it can be transparent
  const isDarkOverlay = location.pathname === '/' && !isScrolled && !isOpen;
  
  // Enforced Step 8 requirements: translucent beige, backdrop blur, charcoal text, reduced padding.
  const navBackground = isOpen
    ? 'bg-surface-beige py-2'
    : (isScrolled || location.pathname !== '/' ? 'bg-surface-beige/80 backdrop-blur-md shadow-sm border-b border-black/5 py-2' : 'bg-transparent py-3');

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="RR Interiors" 
              className={`w-auto object-contain mix-blend-multiply contrast-125 saturate-110 transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'}`} 
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} 
            />
            <span className="text-2xl font-bold text-accent hidden">RR Interiors</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              // Active link: text-accent border-b border-accent
              // Inactive link: text-charcoal
              const textColorClass = isActive 
                ? 'text-accent border-b border-accent pb-0.5' 
                : (isDarkOverlay ? 'text-white hover:text-accent' : 'text-charcoal hover:text-accent');

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${textColorClass}`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <Button to="/contact" className="ml-4 py-2 px-6 text-sm"> {/* Adjusting internal button size for compact premium navbar */}
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none transition-colors ${isDarkOverlay ? 'text-white' : 'text-charcoal'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-surface-beige shadow-lg border-b border-black/5 pb-4">
          <div className="px-4 py-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.path ? 'text-accent bg-accent/10' : 'text-charcoal hover:text-accent hover:bg-white/50'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-3">
              <Button to="/contact" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
