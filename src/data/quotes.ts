export interface Quote {
  id: string;
  text: string;
  character: string;
  movie: string;
  year: number;
}

export const quotesData: Quote[] = [
  {
    id: 'tony-1',
    text: 'Part of the journey is the end.',
    character: 'Tony Stark',
    movie: 'Avengers: Endgame',
    year: 2019,
  },
  {
    id: 'cap-1',
    text: 'I can do this all day.',
    character: 'Steve Rogers',
    movie: 'Captain America: The First Avenger',
    year: 2011,
  },
  {
    id: 'thor-1',
    text: 'Bring me Thanos.',
    character: 'Thor Odinson',
    movie: 'Avengers: Infinity War',
    year: 2018,
  },
  {
    id: 'pepper-1',
    text: 'We\'re the Avengers. We can bust arms dealers all the livelong day.',
    character: 'Pepper Potts',
    movie: 'Avengers: Age of Ultron',
    year: 2015,
  },
  {
    id: 'fury-1',
    text: 'There was an idea to bring together a group of remarkable people, to see if we could become something more.',
    character: 'Nick Fury',
    movie: 'The Avengers',
    year: 2012,
  },
  {
    id: 'thanos-1',
    text: 'Perfectly balanced, as all things should be.',
    character: 'Thanos',
    movie: 'Avengers: Infinity War',
    year: 2018,
  },
];
