import React from 'react';

const Services = () => {
  // Services renamed to Products/Catalog
  const products = [
    {
      title: "Silk Morning Gown",
      price: "IDR 450.000",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      tag: "Best Seller"
    },
    {
      title: "Cotton Day Dress",
      price: "IDR 320.000",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      tag: "New Arrival"
    },
    {
      title: "Linen Lounge Set",
      price: "IDR 580.000",
      image: "https://images.unsplash.com/photo-1589810635657-23294847e66d?q=80&w=1000&auto=format&fit=crop",
      tag: null
    },
    {
      title: "Satin Evening Robe",
      price: "IDR 650.000",
      image: "https://images.unsplash.com/photo-1583391733958-e04847e09963?q=80&w=1000&auto=format&fit=crop",
      tag: "Premium"
    },
    {
      title: "Floral Summer Dress",
      price: "IDR 399.000",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      tag: "Summer"
    },
    {
      title: "Classic White Tunic",
      price: "IDR 299.000",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
      tag: null
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-2">Shop Online</h2>
          <h1 className="text-3xl md:text-5xl font-serif font-medium text-stone-900">The Collection</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-stone-100">
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest z-10">
                    {product.tag}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white/90 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                  <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-stone-600">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-serif text-stone-800 mb-1 group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="text-stone-500 font-medium text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
