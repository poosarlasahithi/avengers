export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

export const statsData: Stat[] = [
  {
    id: 'movies',
    label: 'Feature Films',
    value: 35,
    suffix: '+',
    description: 'Films released in the MCU across Phases 1–6',
  },
  {
    id: 'heroes',
    label: 'Named Heroes',
    value: 40,
    suffix: '+',
    description: 'Distinct heroes introduced across the saga',
  },
  {
    id: 'villains',
    label: 'Iconic Villains',
    value: 22,
    suffix: '',
    description: 'From Loki to Thanos to Doctor Doom',
  },
  {
    id: 'box-office',
    label: 'Global Box Office',
    value: 30,
    prefix: '$',
    suffix: 'B+',
    description: 'Cumulative worldwide earnings across the franchise',
  },
  {
    id: 'years',
    label: 'Years of Storytelling',
    value: 18,
    suffix: '+',
    description: 'From Iron Man in 2008 to Doomsday in 2026',
  },
  {
    id: 'runtime',
    label: 'Hours of Runtime',
    value: 60,
    suffix: '+',
    description: 'Combined cinematic runtime of all MCU films',
  },
];
