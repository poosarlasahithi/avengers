import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quotesData } from '../../data/quotes';

const QuotesCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + quotesData.length) % quotesData.length);
  const next = () => setCurrent(i => (i + 1) % quotesData.length);

  const quote = quotesData[current];

  return (
    <section className="relative w-full min-h-[80vh] bg-[#050505] flex items-center justify-center py-24 px-4 overflow-hidden">
      {/* Ambient glow based on era */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div
          key={current}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 transition-all duration-700"
          style={{ background: '#e23636' }}
        />
      </div>

      <div className="relative z-20 max-w-4xl w-full mx-auto flex flex-col items-center gap-12">
        <span className="text-xs tracking-[0.4em] uppercase text-marvelRed font-sans">Words That Defined a Universe</span>

        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Giant quote mark */}
            <div className="text-9xl font-cinematic text-marvelRed/20 leading-none select-none mb-0 -mb-8">"</div>
            <blockquote className="text-2xl md:text-4xl font-cinematic font-bold text-white leading-snug mb-8 italic">
              {quote.text}
            </blockquote>
            <cite className="not-italic">
              <p className="text-marvelRed font-bold tracking-widest uppercase text-sm">{quote.character}</p>
              <p className="text-gray-500 text-sm">{quote.movie} · {quote.year}</p>
            </cite>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous quote"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-marvelRed hover:text-marvelRed transition-all duration-300"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {quotesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to quote ${i + 1}`}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === current ? '#e23636' : '#333',
                  transform: i === current ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next quote"
            className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-marvelRed hover:text-marvelRed transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuotesCarousel;
