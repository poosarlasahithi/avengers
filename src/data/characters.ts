export interface Character {
  id: string;
  name: string;
  role: 'hero' | 'villain' | 'antihero';
  factions: string[];
  firstAppearance: string;
  bioShort: string;
  powers: string[];
  movieAppearances: { title: string; year: number }[];
  portraitSrc: string; // Placeholder string
  accentColor: string; // Hex color for glow
}

export const charactersData: Character[] = [
  {
    id: 'iron-man',
    name: 'Tony Stark / Iron Man',
    role: 'hero',
    factions: ['Avengers'],
    firstAppearance: '2008',
    bioShort: 'A billionaire industrialist and genius inventor who created a powered suit of armor to save his own life and protect the world.',
    powers: ['Genius-level Intellect', 'Powered Armor Suit', 'Flight', 'Energy Blasts'],
    movieAppearances: [
      { title: 'Iron Man', year: 2008 },
      { title: 'The Avengers', year: 2012 },
      { title: 'Avengers: Endgame', year: 2019 }
    ],
    portraitSrc: 'iron-man-placeholder.png', // We don't have actual assets, this is a placeholder
    accentColor: '#e23636' // Marvel Red
  },
  {
    id: 'dr-doom',
    name: 'Victor Von Doom',
    role: 'villain',
    factions: [],
    firstAppearance: '2026', // Context of Doomsday
    bioShort: 'A brilliant polymath and sorcerer whose scarred visage is hidden behind a formidable iron mask. His ambition knows no bounds across the multiverse.',
    powers: ['Genius-level Intellect', 'Mystic Arts', 'Technopathy', 'Energy Projection'],
    movieAppearances: [
      { title: 'Avengers: Doomsday', year: 2026 }
    ],
    portraitSrc: 'doom-placeholder.png',
    accentColor: '#4ade80' // Doom Green
  },
  {
    id: 'captain-america',
    name: 'Steve Rogers / Captain America',
    role: 'hero',
    factions: ['Avengers'],
    firstAppearance: '2011',
    bioShort: 'A frail young man enhanced to the peak of human perfection by an experimental serum to aid the United States war effort.',
    powers: ['Super Soldier Physiology', 'Vibranium Shield Mastery', 'Master Tactician'],
    movieAppearances: [
      { title: 'Captain America: The First Avenger', year: 2011 },
      { title: 'The Avengers', year: 2012 },
      { title: 'Avengers: Endgame', year: 2019 }
    ],
    portraitSrc: 'cap-placeholder.png',
    accentColor: '#3b82f6' // Cap Blue
  }
];
