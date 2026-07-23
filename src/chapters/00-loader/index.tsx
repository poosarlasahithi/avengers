import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('Initializing Protocol...');

  const messages = [
    'Initializing Protocol...',
    'Assembling the team...',
    'Loading the multiverse...',
    'The Story Before The End',
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let currentProgress = 0;
    let msgIndex = 0;

    const msgInterval = setInterval(() => {
      msgIndex = Math.min(msgIndex + 1, messages.length - 1);
      setDisplayText(messages[msgIndex]);
    }, 800);

    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 12) + 4;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        clearInterval(msgInterval);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = 'auto';
        }, 600);
      }
    }, 150);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(226,54,54,0.08),transparent)]" />

          {/* Logo Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="relative mb-16"
          >
            <div className="w-20 h-20 rounded-full border-2 border-marvelRed/50 flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(226,54,54,0.25)] mx-auto">
              <span className="text-3xl font-cinematic font-black text-marvelRed">A</span>
            </div>
            <p className="text-xs tracking-[0.5em] uppercase text-gray-500 text-center font-sans">
              The Story Before The End
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-64 flex flex-col items-center gap-4"
          >
            <div className="w-full h-[2px] bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-marvelRed to-marvelGold rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.1 }}
              />
            </div>
            <div className="flex w-full justify-between items-center">
              <motion.span
                key={displayText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs tracking-widest uppercase text-gray-500 font-sans"
              >
                {displayText}
              </motion.span>
              <span className="text-xs text-gray-600 font-mono">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
