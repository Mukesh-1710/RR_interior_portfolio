import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '../logo.png';

const InstagramIcon = ({ size = 24, className = '', strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-text-primary pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-10 group">
              <img
                src={logo}
                alt="RR Interiors Logo"
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <p className="text-white/90 text-base leading-loose font-light italic">
              "Quietly defining the architectural narrative of modern living through bespoke materiality and timeless form."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-medium mb-10">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                const isActive = location.pathname === path;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className={`text-sm uppercase tracking-widest transition-all duration-500 ${isActive ? 'text-accent' : 'text-white/70 hover:text-white'}`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-medium mb-10">The Studio</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                <span className="text-white/70 text-sm leading-loose font-light">
                  ByPass Road, Avaniyapuram<br />
                  Madurai, Tamil Nadu<br />
                  625012
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-accent flex-shrink-0" strokeWidth={1.5} />
                <span className="text-white/70 text-sm font-light tracking-widest">+91 86102 77404</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-accent flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:rrinteriorsmdu@gmail.com" className="text-white/70 text-sm hover:text-white transition-colors font-light tracking-wide">
                  rrinteriorsmdu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-medium mb-10">Connect</h4>
            <div className="flex flex-col gap-8">
              <a href="https://www.instagram.com/rr.interior.mdu" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                  <InstagramIcon size={18} className="text-white/70 group-hover:text-accent transition-colors duration-500" strokeWidth={1} />
                </div>
                <span className="text-white/70 text-sm group-hover:text-white transition-colors">Instagram</span>
              </a>

              <div className="relative pt-4">
                <h4 className="text-white/30 text-[0.6rem] uppercase tracking-[0.4em] font-medium mb-4">Curated Updates</h4>
                <div className="flex border-b border-white/10 focus-within:border-accent transition-colors duration-500">
                  <input
                    type="email"
                    placeholder="Studio Newsletter"
                    className="bg-transparent text-sm text-white py-3 outline-none w-full placeholder:text-white/20 font-light"
                  />
                  <button className="text-accent hover:translate-x-1 transition-transform duration-500">
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[0.6rem] uppercase tracking-[0.3em] text-white/40 font-medium">
          <p className="mb-4 md:mb-0">
            &copy; Studio {new Date().getFullYear()} • RR Interiors
          </p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

