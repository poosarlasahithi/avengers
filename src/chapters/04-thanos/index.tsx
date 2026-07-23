import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsapConfig';

const Thanos: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for the snap graphic
      gsap.to('.thanos-bg', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.from('.thanos-content', {
        opacity: 0, y: 80, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.thanos-content', start: 'top 70%' },
      });

      // Stagger the ash particles in
      gsap.from('.ash-particle', {
        opacity: 0, scale: 0, duration: 0.6, stagger: 0.03,
        scrollTrigger: { trigger: '.ash-container', start: 'top 80%' },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Generate pseudo-random particles deterministically
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: ((i * 73 + 17) % 100),
    top: ((i * 47 + 31) % 100),
    size: ((i * 11 + 5) % 6) + 2,
    opacity: (((i * 37 + 13) % 60) + 20) / 100,
    delay: (i * 0.02) % 0.5,
  }));

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Deep space background with parallax */}
      <div className="thanos-bg absolute inset-0 -top-1/4 h-[150%] z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#1a0a2e] via-[#0d0515] to-black" />
      </div>

      {/* Ash particles */}
      <div className="ash-container absolute inset-0 z-0 pointer-events-none">
        {particles.map(p => (
          <div
            key={p.id}
            className="ash-particle absolute rounded-full bg-gray-400"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="thanos-content relative z-10 max-w-5xl mx-auto px-4 md:px-16 py-32 text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-purple-400 font-sans mb-4 block">The Mad Titan</span>
        <h2 className="text-6xl md:text-9xl font-cinematic font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-purple-600 to-purple-900 mb-8 leading-none">
          THANOS
        </h2>
        
        {/* Snap graphic */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-purple-500" />
          <div className="flex gap-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ background: ['#3b82f6','#f59e0b','#e23636','#a855f7','#22d3ee','#f97316'][i] }}
              />
            ))}
          </div>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-purple-500" />
        </div>

        <blockquote className="text-2xl md:text-3xl italic text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto mb-12">
          "Perfectly balanced, as all things should be."
        </blockquote>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          With a single snap, Thanos erased half of all living beings. Not out of cruelty — he believed it was the only way to save the universe from itself.
        </p>
      </div>
    </section>
  );
};

export default Thanos;
