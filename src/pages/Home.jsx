import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Simulating an Instagram Feed with House Dress Theme
  const feedImages = [
    "https://images.unsplash.com/photo-1589810635657-23294847e66d?q=80&w=800&auto=format&fit=crop", // Silk Robe
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop", // White Lounge
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop", // Dress
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", // Fashion
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop", // Model
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", // Hero Style
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

      {/* Video Review Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Review Content */}
            <div className="order-2 md:order-1">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-stone-900 leading-tight">
                Real Comfort, <br /> Real Reviews.
              </h2>
              <blockquote className="text-xl text-stone-600 mb-6 italic">
                "I've never felt more comfortable and stylish at home. The fabric is breathable and the cut is perfect for my daily routine."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="Customer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-stone-900">Sarah D.</div>
                  <div className="text-xs text-stone-500 uppercase tracking-widest">Verified Buyer</div>
                </div>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="order-1 md:order-2 relative aspect-video bg-stone-200 shadow-xl overflow-hidden rounded-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/yK5G9H_mI70?rel=0"
                title="House Dress Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
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
