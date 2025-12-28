import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Simulating an Instagram Feed
  const feedImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <div>
      {/* Visual Hero */}
      <section className="relative h-[80vh] w-full bg-stone-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-90"
          alt="Hero Fashion"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl bg-white/80 backdrop-blur-sm p-10 md:p-16 shadow-2xl">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-stone-500">New Collection 2024</h2>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-stone-900 leading-tight">
              Elegance is an <br />Attitude.
            </h1>
            <Link to="/services" className="btn-primary inline-flex items-center gap-2 mt-4 group">
              Shop Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif italic mb-6 text-stone-700">"Comfort doesn't mean compromising on style."</h3>
          <p className="text-stone-500 leading-relaxed">
            Discover our curated collection of house dresses designed for the modern woman.
            Perfect for lounging at home or stepping out for a casual brunch.
          </p>
        </div>
      </section>

      {/* Instagram Grid Feed */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-8 px-2">
          <h3 className="font-bold uppercase tracking-widest text-sm">@HouseDress.Sie</h3>
          <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" /> Follow Us
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {feedImages.map((img, idx) => (
            <div key={idx} className="relative aspect-square group overflow-hidden cursor-pointer bg-stone-100">
              <img
                src={img}
                alt="Fashion Feed"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
