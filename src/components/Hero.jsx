import React from 'react';
import { ArrowRight, Code, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] aspect-square rounded-full bg-gradient-to-br from-primary/20 to-purple-600/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/2 -mr-[40rem] w-[80rem] aspect-square rounded-full bg-gradient-to-br from-blue-600/20 to-teal-400/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8 text-sm text-primary font-medium animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Crafting Digital <br />
          <span className="text-primary">Excellence</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          I build high-performance web applications with modern technologies.
          Focusing on aesthetic design, seamless user experience, and robust engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="btn-primary flex items-center gap-2 group">
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services" className="btn-outline">
            View Services
          </Link>
        </div>

        {/* Feature strips */}
        <div className="mt-20 pt-8 border-t border-slate-800/50 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Code className="w-5 h-5 text-primary" />
            <span className="font-semibold">Clean Code</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Zap className="w-5 h-5 text-accent" />
            <span className="font-semibold">Fast Performance</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span className="font-semibold">Secure</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <span className="font-bold text-xl text-white">24/7</span>
            <span className="font-semibold">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
