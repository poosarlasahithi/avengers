export interface TimelineEvent {
  id: string;
  year: number;
  era: string; // e.g. 'Phase 1', 'Phase 2'
  movieTitle: string;
  villain?: string;
  heroesIntroduced?: string[];
  summary: string;
  accentColor?: string;
}

export const timelineData: TimelineEvent[] = [
  {
    id: 'iron-man-2008',
    year: 2008,
    era: 'Phase 1',
    movieTitle: 'Iron Man',
    villain: 'Obadiah Stane / Iron Monger',
    heroesIntroduced: ['Tony Stark / Iron Man'],
    summary: 'A genius arms dealer is taken captive and forced to build a weapon. Instead, he forges a suit of armor and becomes Iron Man — the spark that ignites the MCU.',
    accentColor: '#e23636',
  },
  {
    id: 'incredible-hulk-2008',
    year: 2008,
    era: 'Phase 1',
    movieTitle: 'The Incredible Hulk',
    villain: 'Abomination',
    heroesIntroduced: ['Bruce Banner / Hulk'],
    summary: 'A brilliant scientist on the run from his own catastrophic power finds that his greatest weapon may also be his only salvation.',
    accentColor: '#4ade80',
  },
  {
    id: 'thor-2011',
    year: 2011,
    era: 'Phase 1',
    movieTitle: 'Thor',
    villain: 'Loki',
    heroesIntroduced: ['Thor Odinson'],
    summary: 'An arrogant Asgardian prince is stripped of his power and exiled to Earth, where he must prove himself worthy through humility.',
    accentColor: '#fbbf24',
  },
  {
    id: 'cap-2011',
    year: 2011,
    era: 'Phase 1',
    movieTitle: 'Captain America: The First Avenger',
    villain: 'Red Skull / HYDRA',
    heroesIntroduced: ['Steve Rogers / Captain America'],
    summary: 'A small but brave young man is transformed into a super soldier to battle HYDRA in World War II, becoming America\'s first hero.',
    accentColor: '#3b82f6',
  },
  {
    id: 'avengers-2012',
    year: 2012,
    era: 'Phase 1',
    movieTitle: 'The Avengers',
    villain: 'Loki',
    heroesIntroduced: ['Natasha Romanoff / Black Widow', 'Clint Barton / Hawkeye'],
    summary: 'Earth\'s mightiest heroes assemble for the first time when Loki arrives with a Chitauri army. Working together — or not — they must save New York.',
    accentColor: '#a855f7',
  },
  {
    id: 'guardians-2014',
    year: 2014,
    era: 'Phase 2',
    movieTitle: 'Guardians of the Galaxy',
    villain: 'Ronan the Accuser',
    heroesIntroduced: ['Peter Quill / Star-Lord', 'Gamora', 'Drax', 'Rocket', 'Groot'],
    summary: 'A ragtag group of cosmic misfits bands together to prevent a fanatical Kree warrior from annihilating an entire planet.',
    accentColor: '#f97316',
  },
  {
    id: 'infinity-war-2018',
    year: 2018,
    era: 'Phase 3',
    movieTitle: 'Avengers: Infinity War',
    villain: 'Thanos',
    summary: 'Every hero faces their greatest challenge when the Mad Titan Thanos sets out to collect all six Infinity Stones to reshape the universe.',
    accentColor: '#8b5cf6',
  },
  {
    id: 'endgame-2019',
    year: 2019,
    era: 'Phase 3',
    movieTitle: 'Avengers: Endgame',
    villain: 'Thanos (past)',
    summary: 'Destroyed but not defeated, the remaining Avengers attempt one final, desperate gambit — a time heist to undo the Snap.',
    accentColor: '#e23636',
  },
  {
    id: 'doomsday-2026',
    year: 2026,
    era: 'Phase 6',
    movieTitle: 'Avengers: Doomsday',
    villain: 'Doctor Doom',
    summary: 'The fractured multiverse tears open, and from its darkest corner emerges Victor Von Doom — a force not of chaos, but of absolute order.',
    accentColor: '#4ade80',
  },
];
