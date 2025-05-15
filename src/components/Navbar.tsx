import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 backdrop-blur-md bg-black/30 border-b border-purple-500/10' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-mono font-bold tracking-tight animate-fade-in"
        >
          <span className="text-purple-400">Dimpal</span>
          <span className="text-white">Samal</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors font-medium text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-purple-400 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full backdrop-blur-lg bg-black/60 border-t border-purple-900/30 shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
          <ul className="py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 block py-2 border-b border-purple-800/20 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;