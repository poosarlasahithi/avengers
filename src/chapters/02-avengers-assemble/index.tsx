import React, { useEffect, useRef } from 'react';
import { buildAvengersAssembleTimeline } from './Chapter.scene';

const AvengersAssemble: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const tl = buildAvengersAssembleTimeline(containerRef.current);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black py-20"
    >
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-marvelRed via-black to-black">
      </div>

      <div className="relative z-10 w-full px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2 chapter-text">
          <h2 className="text-4xl md:text-6xl font-cinematic font-bold text-marvelRed mb-4">
            Phase 1
          </h2>
          <h3 className="text-2xl md:text-4xl font-cinematic font-bold text-foreground mb-6">
            Avengers Assemble
          </h3>
          <p className="text-lg text-secondary font-sans tracking-wide leading-relaxed mb-8 max-w-lg">
            Earth's mightiest heroes found themselves outmatched and divided. But when an unprecedented threat arrived from the stars, they had to learn to fight as one.
          </p>
          
          <div className="flex gap-4">
            <div className="w-12 h-1 bg-marvelGold rounded-full" />
            <div className="w-12 h-1 bg-marvelRed rounded-full opacity-50" />
            <div className="w-12 h-1 bg-secondary rounded-full opacity-20" />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 chapter-visual flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-border flex items-center justify-center">
            {/* Visual placeholder - e.g. Tesseract or A logo */}
            <div className="absolute inset-4 rounded-full border border-muted animate-spin-slow" style={{ animationDuration: '20s' }} />
            <div className="text-8xl font-cinematic text-marvelRed drop-shadow-[0_0_20px_rgba(226,54,54,0.5)]">
              A
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AvengersAssemble;
