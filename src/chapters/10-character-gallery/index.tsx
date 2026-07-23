import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { charactersData } from '../../data/characters';
import type { Character } from '../../data/characters';

const CharacterGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hero' | 'villain'>('all');

  const filteredCharacters = charactersData.filter(char => 
    filter === 'all' ? true : char.role === filter
  );

  return (
    <section className="relative w-full min-h-screen bg-background py-24 px-4 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-foreground mb-12 text-center">
          Character Database
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'hero', 'villain'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-2 rounded-full uppercase tracking-widest text-sm font-bold transition-all duration-300 ${
                filter === f 
                  ? 'bg-marvelRed text-white shadow-[0_0_15px_rgba(226,54,54,0.5)]' 
                  : 'bg-muted text-secondary hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCharacters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-xl overflow-hidden bg-[#111] border border-border cursor-pointer"
      style={{
        boxShadow: `0 0 0px ${character.accentColor}00`
      }}
      whileHover={{
        y: -5,
        boxShadow: `0 10px 30px -10px ${character.accentColor}80`,
        borderColor: character.accentColor
      }}
    >
      {/* Placeholder Image */}
      <div className="h-64 w-full bg-gradient-to-t from-black to-transparent flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition-opacity" />
        <span className="font-cinematic text-5xl font-bold opacity-20 group-hover:scale-110 transition-transform duration-500" style={{ color: character.accentColor }}>
          {character.name.charAt(0)}
        </span>
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-cinematic font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
          {character.name}
        </h3>
        <p className="text-sm text-secondary mb-4 line-clamp-3">
          {character.bioShort}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {character.powers.slice(0, 2).map((power, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-md text-gray-300">
              {power}
            </span>
          ))}
          {character.powers.length > 2 && (
            <span className="text-xs px-2 py-1 bg-muted rounded-md text-gray-500">
              +{character.powers.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterGallery;
