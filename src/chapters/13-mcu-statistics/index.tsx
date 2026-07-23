import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../../data/stats';

const useCountUp = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatCounter: React.FC<{ stat: typeof statsData[0]; visible: boolean }> = ({ stat, visible }) => {
  const count = useCountUp(stat.value, 2200, visible);
  return (
    <div className="stat-card text-center p-8 rounded-2xl border border-gray-800 bg-gray-950/60 backdrop-blur-sm group hover:border-marvelRed/50 transition-all duration-500">
      <div className="text-5xl md:text-6xl font-cinematic font-black text-white mb-2 tabular-nums">
        {stat.prefix || ''}{count}{stat.suffix || ''}
      </div>
      <div className="text-sm font-bold tracking-widest uppercase text-marvelRed mb-3">{stat.label}</div>
      <div className="text-sm text-gray-500">{stat.description}</div>
    </div>
  );
};

const MCUStatistics: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black py-28 px-4 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(226,54,54,0.06),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-marvelRed font-sans mb-4 block">By the numbers</span>
          <h2 className="text-4xl md:text-6xl font-cinematic font-bold text-white">The MCU in Numbers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map(stat => (
            <StatCounter key={stat.id} stat={stat} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MCUStatistics;
