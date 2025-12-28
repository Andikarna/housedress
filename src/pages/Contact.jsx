import React from 'react';
import { Mail, Phone, ShoppingBag } from 'lucide-react';

const Contact = () => {
  // Focused on "How to Order"
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">How to Order</h1>
          <p className="text-stone-500">
            Ready to purchase? Contact our team via WhatsApp or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-stone-100 hover:border-black transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
              <Phone className="w-5 h-5 text-stone-600 group-hover:text-green-600" />
            </div>
            <h3 className="font-serif text-lg mb-2">WhatsApp</h3>
            <p className="text-stone-500 text-sm mb-4">Fastest response for orders.</p>
            <div className="text-xs font-bold tracking-widest uppercase border-b border-stone-200 inline-block pb-1 group-hover:border-black">Chat Now</div>
          </div>

          <div className="p-8 border border-stone-100 hover:border-black transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
              <Mail className="w-5 h-5 text-stone-600 group-hover:text-blue-600" />
            </div>
            <h3 className="font-serif text-lg mb-2">Email</h3>
            <p className="text-stone-500 text-sm mb-4">Partnerships & Inquiries.</p>
            <div className="text-xs font-bold tracking-widest uppercase border-b border-stone-200 inline-block pb-1 group-hover:border-black">Send Email</div>
          </div>

          <div className="p-8 border border-stone-100 hover:border-black transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-100 transition-colors">
              <ShoppingBag className="w-5 h-5 text-stone-600 group-hover:text-pink-600" />
            </div>
            <h3 className="font-serif text-lg mb-2">Shopee/Tokopedia</h3>
            <p className="text-stone-500 text-sm mb-4">Secure marketplace checkout.</p>
            <div className="text-xs font-bold tracking-widest uppercase border-b border-stone-200 inline-block pb-1 group-hover:border-black">Visit Store</div>
          </div>
        </div>

        {/* Simple Form */}
        <div className="mt-20 max-w-lg mx-auto">
          <h3 className="text-center font-serif text-xl mb-8">Send us a Message</h3>
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Email Address" className="input-field" />
            <textarea rows="4" placeholder="Message (Orders / Sizing Question)" className="input-field resize-none"></textarea>
            <button className="btn-primary w-full">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
