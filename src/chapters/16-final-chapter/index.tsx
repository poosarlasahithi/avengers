import React from 'react';
import { motion } from 'framer-motion';

const FinalChapter: React.FC = () => {
  return (
    <footer className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden px-4 py-24">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Red vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(226,54,54,0.06),transparent)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Icon */}
        <div className="w-20 h-20 rounded-full border border-marvelRed/50 flex items-center justify-center mx-auto mb-10 shadow-[0_0_30px_rgba(226,54,54,0.2)]">
          <span className="text-3xl font-cinematic font-black text-marvelRed">A</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-6 leading-tight">
          The Story<br/>Before The End.
        </h2>

        <p className="text-gray-500 text-lg mb-16 max-w-xl mx-auto">
          Every hero. Every sacrifice. Every snap. Every choice. It was all leading here.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 justify-center mb-16">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-marvelRed/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-marvelRed" />
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-marvelRed/50" />
        </div>

        {/* Legal Disclaimer */}
        <div className="text-xs text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <p>
            This is an unofficial, non-commercial fan tribute created by admirers of the Marvel Cinematic Universe.
            It is not affiliated with, endorsed by, or sponsored by Marvel Studios, Disney, or any related entity.
            All characters, names, and associated media are trademarks and copyrights of their respective owners,
            used here for non-commercial fan-appreciation purposes only. No copyrighted artwork, footage, or text
            has been reproduced; all visuals and copy are original interpretations.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FinalChapter;
