import React, { useEffect, useRef } from 'react';
import { buildTheBeginningTimeline } from './Chapter.scene';

const TheBeginning: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize the GSAP timeline for this chapter
    const tl = buildTheBeginningTimeline(containerRef.current);

    return () => {
      // Cleanup ScrollTrigger instance on unmount
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 z-0">
        {/* Placeholder for particle background or WebGL scene */}
        <div className="w-full h-full bg-gradient-to-b from-black to-[#0a0a0a] opacity-80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="title-text text-5xl md:text-7xl lg:text-8xl font-cinematic font-bold text-foreground mb-6 opacity-0">
          The Story Before <span className="text-marvelRed">The End</span>
        </h1>
        <p className="subtitle-text text-lg md:text-xl text-secondary font-sans tracking-wide opacity-0 max-w-2xl mx-auto">
          There was an idea. To bring together a group of remarkable people, to see if they could become something more.
        </p>
        
        <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0">
          <span className="text-xs uppercase tracking-[0.3em] text-secondary mb-2">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-marvelRed to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TheBeginning;
