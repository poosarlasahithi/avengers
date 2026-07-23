import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsapConfig';

const STONES = [
  { name: 'Space',    color: '#3b82f6', description: 'Controls space, grants the user the power to exist anywhere.' },
  { name: 'Mind',     color: '#f59e0b', description: 'Governs thought and consciousness, even the subconscious.' },
  { name: 'Reality',  color: '#e23636', description: 'Alters the fabric of what is real, granting any wish.' },
  { name: 'Power',    color: '#a855f7', description: 'Raw cosmic energy — the most dangerous of the six.' },
  { name: 'Time',     color: '#22d3ee', description: 'Manipulates time itself, past, present, and future.' },
  { name: 'Soul',     color: '#f97316', description: 'Commands all life, and what lies beyond.' },
];

const InfinitySaga: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.saga-title', {
        opacity: 0, y: 60, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.saga-title', start: 'top 80%' },
      });
      gsap.from('.stone-card', {
        opacity: 0, scale: 0.8, y: 40, stagger: 0.12, duration: 0.7, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: '.stones-grid', start: 'top 75%' },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black py-28 px-4 md:px-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="saga-title text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-purple-400 font-sans mb-4 block">Phase 3 Peak</span>
          <h2 className="text-5xl md:text-7xl font-cinematic font-bold text-white mb-6">The Infinity Saga</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Six stones. Six aspects of existence. One gauntlet to wield them all. The Infinity Saga was the crescendo of ten years of storytelling — and it ended with half a universe's silence.
          </p>
        </div>

        <div className="stones-grid grid grid-cols-2 md:grid-cols-3 gap-6">
          {STONES.map((stone) => (
            <div
              key={stone.name}
              className="stone-card group relative rounded-2xl p-6 border bg-gray-950/80 backdrop-blur-sm cursor-pointer transition-all duration-300"
              style={{ borderColor: `${stone.color}30` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px -8px ${stone.color}60`;
                (e.currentTarget as HTMLElement).style.borderColor = `${stone.color}80`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
                (e.currentTarget as HTMLElement).style.borderColor = `${stone.color}30`;
              }}
            >
              {/* Stone orb */}
              <div
                className="w-14 h-14 rounded-full mb-4 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${stone.color}ff, ${stone.color}40)`,
                  boxShadow: `0 0 20px ${stone.color}60`,
                }}
              >
                <div className="w-5 h-5 rounded-full bg-white/20 blur-[2px]" />
              </div>
              <h3 className="text-lg font-cinematic font-bold text-white mb-2">
                {stone.name} Stone
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{stone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfinitySaga;
