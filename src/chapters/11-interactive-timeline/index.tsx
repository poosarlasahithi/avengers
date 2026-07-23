import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineData } from '../../data/timeline';

const InteractiveTimeline: React.FC = () => {
  const [selected, setSelected] = useState<string>(timelineData[0].id);

  const selectedEvent = timelineData.find(e => e.id === selected)!;

  return (
    <section className="relative w-full min-h-screen bg-[#080808] py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-marvelRed font-sans mb-4 block">Chapter 11</span>
          <h2 className="text-4xl md:text-6xl font-cinematic font-bold text-white mb-4">The MCU Timeline</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Select a milestone to explore its story.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Timeline axis */}
          <div className="lg:w-1/3 flex flex-col gap-0 relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-800 z-0" />

            {timelineData.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelected(event.id)}
                className={`relative z-10 flex items-center gap-4 text-left py-3 transition-all duration-300 group`}
              >
                {/* Node */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300 z-10"
                  style={{
                    backgroundColor: selected === event.id ? event.accentColor : '#111',
                    borderColor: selected === event.id ? event.accentColor! : '#333',
                    boxShadow: selected === event.id ? `0 0 20px ${event.accentColor}80` : 'none',
                  }}
                >
                  <span className="text-xs font-bold text-white">{event.year.toString().slice(2)}</span>
                </div>
                {/* Label */}
                <div>
                  <div className={`text-sm font-bold font-cinematic transition-colors ${selected === event.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {event.movieTitle}
                  </div>
                  <div className="text-xs text-gray-600">{event.era}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="rounded-2xl border bg-gray-950 p-8 md:p-12"
                style={{ borderColor: `${selectedEvent.accentColor}40` }}
              >
                {/* Year badge */}
                <span
                  className="inline-block text-sm font-bold px-3 py-1 rounded-full mb-6"
                  style={{ background: `${selectedEvent.accentColor}20`, color: selectedEvent.accentColor }}
                >
                  {selectedEvent.year} · {selectedEvent.era}
                </span>

                <h3 className="text-3xl md:text-5xl font-cinematic font-bold text-white mb-6">
                  {selectedEvent.movieTitle}
                </h3>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  {selectedEvent.summary}
                </p>

                {selectedEvent.heroesIntroduced && selectedEvent.heroesIntroduced.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">Heroes Introduced</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.heroesIntroduced.map(h => (
                        <span key={h} className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300">{h}</span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEvent.villain && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Primary Villain</p>
                    <p className="text-white font-semibold">{selectedEvent.villain}</p>
                  </div>
                )}

                {/* Accent line */}
                <div className="mt-8 h-[2px] rounded-full" style={{ background: `linear-gradient(to right, ${selectedEvent.accentColor}, transparent)` }} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
