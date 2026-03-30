import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '../logo.PNG';

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
    <footer className="bg-[#18181A] pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:pr-8">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="RR Interiors Logo"
                className="h-16 md:h-20 w-auto object-contain contrast-125 saturate-110"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <h3 className="text-2xl font-serif tracking-widest text-accent uppercase hidden">
                RR Interiors
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium architecture and design studio creating spaces that inspire and elevate the human experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                const isActive = location.pathname === path;
                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className={`group text-sm inline-flex items-center transition-all duration-300 ${isActive ? 'text-accent translate-x-1' : 'text-gray-400 hover:text-accent hover:translate-x-1'}`}
                    >
                      {isActive && (
                        <span className="mr-2">&rarr;</span>
                      )}
                      <span>{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start text-sm text-gray-400">
                <MapPin size={18} className="mr-3 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  ByPass Road<br />
                  Avaniyapuram<br />
                  Madurai - 625012
                </span>
              </li>
              <li className="flex items-start text-sm text-gray-400">
                <Phone size={18} className="mr-3 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  86102 77404<br />
                </span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail size={18} className="mr-3 text-accent flex-shrink-0" strokeWidth={1.5} />
                <a href="mailto:rrinteriorsmdu@gmail.com" className="hover:text-accent transition-colors">
                  rrinteriorsmdu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us & Newsletter */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6 tracking-wide">Follow Us</h4>
            <div className="flex items-center text-sm text-gray-400 mb-10">
              <InstagramIcon size={18} className="mr-3 text-accent" strokeWidth={1.5} />
              <a href="https://www.instagram.com/rr.interior.mdu?igsh=MWlsNHc2bHowazZuaw==" className="hover:text-accent transition-colors">@rr.interior.mdu</a>
            </div>

            <h4 className="text-lg font-serif text-white mb-6 tracking-wide">Newsletter</h4>
            <div className="flex w-full overflow-hidden rounded-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#2A2A2A] text-sm text-gray-300 px-4 py-3 outline-none w-full border-none focus:ring-1 focus:ring-accent"
              />
              <button className="bg-accent/90 hover:bg-accent px-5 flex items-center justify-center transition-colors">
                <ArrowRight size={18} className="text-white" strokeWidth={2} />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RR Interiors. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
