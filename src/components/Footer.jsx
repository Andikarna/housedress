import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone-100 mt-20">
      <div className="max-w-7xl mx-auto py-16 px-4 text-center">

        <h3 className="text-xl font-serif font-bold tracking-widest uppercase mb-6">HouseDress.Sie</h3>

        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-stone-400 hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-stone-400 hover:text-black transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-stone-400 hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>

        <p className="text-stone-500 text-sm mb-2">
          Comfort meets Elegance. Designed for the modern home.
        </p>
        <p className="text-stone-400 text-xs">
          &copy; {new Date().getFullYear()} HouseDress.Sie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
