import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const isDarkOverlay = location.pathname === '/' && !isScrolled && !isOpen;
  const navBackground = isOpen
    ? `bg-white ${isScrolled ? 'py-2' : 'py-3'}`
    : (isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4');

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="RR Interiors Logo" className={`w-auto object-contain mix-blend-multiply contrast-125 saturate-110 transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'}`} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <span className="text-2xl font-bold text-accent hidden">RR Interiors</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              
              let textColorClass = '';
              if (isActive) {
                textColorClass = 'text-accent border-b-2 border-accent pb-1 hover:text-accent';
              } else {
                textColorClass = isDarkOverlay ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-accent';
              }

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
            <Link to="/contact" className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none transition-colors ${isDarkOverlay ? 'text-white hover:text-accent-light' : 'text-gray-700 hover:text-accent'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-white shadow-xl pb-2">
          <div className="px-4 py-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path ? 'text-accent bg-accent/5' : 'text-gray-700 hover:text-accent hover:bg-gray-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-3 mt-2 text-center rounded-md text-base font-medium bg-accent text-white hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
