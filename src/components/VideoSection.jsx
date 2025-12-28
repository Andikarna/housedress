import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Implementation in Action</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Watch how we transform complex problems into elegant solutions. A glimpse into my development workflow.
          </p>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group bg-black">
          {/* Fallback/Placeholder content since we might not have a real video file yet. 
                    Using an iframe for a generic coding timelapse or a styled placeholder. */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </div>
          </div>

          {/* Placeholder Image/Pseudo-Video */}
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
            alt="Coding Workspace"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
          />

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
            <div className="flex items-center gap-4">
              <div className="bg-red-600 px-2 py-1 rounded text-xs font-bold text-white uppercase">LIVE DEMO</div>
              <p className="text-white font-medium">Frontend Development Workflow • 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
