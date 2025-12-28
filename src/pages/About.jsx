import React from 'react';

const About = () => {
  // REQUIREMENT: Must keep personal identity section
  return (
    <div className="pt-32 pb-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Brand Story */}
        <div className="bg-white p-8 md:p-16 shadow-sm mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-8">Our Story</h1>
          <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
            HouseDress.Sie was born from a simple idea: home wear should be beautiful.
            We believe that every woman deserves to feel elegant, even when no one is watching.
            Our fabrics are hand-picked for comfort and our designs are timeless.
          </p>
          <div className="w-20 h-1 bg-stone-200 mx-auto"></div>
        </div>

        {/* Assignment Identity Section (Re-styled) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-2">The Founder</h2>
            <h3 className="text-2xl font-serif mb-4">[YOUR NAME HERE]</h3>
            <div className="space-y-2 text-stone-500 text-sm mb-6 border-l-2 border-stone-200 pl-4">
              <p><span className="font-bold text-stone-800">Student ID:</span> [12345678]</p>
              <p><span className="font-bold text-stone-800">Class:</span> [Informatics A]</p>
              <p><span className="font-bold text-stone-800">Role:</span> Creative Director</p>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm">
              "I started this brand as a university project and poured my passion for design into every thread.
              Thank you for supporting this journey within the Joki Assignment."
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="aspect-[3/4] bg-stone-200 relative">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop"
                alt="Profile Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
