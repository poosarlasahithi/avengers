import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Story', to: '/' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Timeline', to: '/timeline' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-900' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-cinematic font-bold text-xl text-white tracking-widest hover:text-marvelRed transition-colors">
          <span className="text-marvelRed">A</span>VENGERS
        </Link>

        <ul className="flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm uppercase tracking-widest font-sans transition-colors hover:text-white ${
                  location.pathname === link.to ? 'text-white' : 'text-gray-500'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
