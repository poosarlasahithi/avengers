import React, { useEffect, useRef } from 'react';
import { buildDoomsdayTimeline } from './Chapter.scene';

const AvengersDoomsday: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const tl = buildDoomsdayTimeline(containerRef.current);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[300vh] bg-black text-foreground overflow-hidden"
    >
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background VFX placeholder */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a2a1a] via-black to-black opacity-60"></div>
          
          {/* Green lightning flashes */}
          <div className="green-lightning absolute inset-0 bg-[#4ade80] mix-blend-screen opacity-0" />
        </div>

        {/* Doom Mask Placeholder (CSS 3D object) */}
        <div className="doom-mask-container relative z-10 w-64 h-80 mb-12" style={{ perspective: '1000px' }}>
          <div className="doom-mask w-full h-full rounded-2xl bg-gradient-to-br from-gray-700 via-gray-900 to-black border-4 border-gray-600 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(74,222,128,0.2)]">
            {/* Eyes */}
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-6 bg-black rounded-full overflow-hidden relative">
                <div className="doom-eye absolute inset-0 bg-[#4ade80] opacity-0 blur-[2px]" />
              </div>
              <div className="w-12 h-6 bg-black rounded-full overflow-hidden relative">
                <div className="doom-eye absolute inset-0 bg-[#4ade80] opacity-0 blur-[2px]" />
              </div>
            </div>
            {/* Mouth Grille */}
            <div className="flex flex-col gap-2 w-24">
              <div className="h-1 bg-gray-500 w-full" />
              <div className="h-1 bg-gray-500 w-full" />
              <div className="h-1 bg-gray-500 w-full" />
              <div className="h-1 bg-gray-500 w-full" />
            </div>
          </div>
        </div>

        {/* Text Reveal */}
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h2 className="doomsday-title text-5xl md:text-8xl font-cinematic font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 tracking-[0.5em] opacity-0 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            AVENGERS:<br/><span className="text-[#4ade80] drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]">DOOMSDAY</span>
          </h2>
          <p className="doomsday-subtitle text-xl text-gray-400 font-sans opacity-0 max-w-2xl mx-auto">
            A new mask. A new universe. The ultimate threat.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AvengersDoomsday;
