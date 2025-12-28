import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/services' }, // Mapping Services -> Collection
    { name: 'Our Story', path: '/about' },     // Mapping About -> Our Story
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo (Centered on mobile, Left on desktop) */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:justify-start">
            <Link to="/" className="text-2xl font-serif font-bold tracking-widest uppercase">
              HouseDress<span className="text-stone-400">.Sie</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-medium uppercase tracking-widest transition-colors ${isActive(link.path)
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-stone-500 hover:text-black'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Icons (Right) */}
          <div className="flex items-center gap-4 text-stone-600">
            <Heart className="w-5 h-5 hover:text-black cursor-pointer hidden sm:block" />
            <ShoppingBag className="w-5 h-5 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-sm font-medium uppercase tracking-wider ${isActive(link.path)
                    ? 'text-black bg-stone-50'
                    : 'text-stone-500 hover:text-black'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
