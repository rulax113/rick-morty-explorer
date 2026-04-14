import { Character } from './character.model';

export const MOCK_CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Spider-Man',
    description: 'Peter Parker – student i fotograf, który po ugryzieniu przez radioaktywnego pająka zyskał nadludzkie moce.',
    series: 'The Amazing Spider-Man',
    status: 'active',
    power: 8,
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
    tags: ['hero', 'street-level', 'new-york'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 2,
    name: 'Iron Man',
    description: 'Tony Stark – geniusz, miliarder, playboy i filantrop. W pancerzu Iron Mana chroni świat przed zagrożeniami.',
    series: 'The Invincible Iron Man',
    status: 'deceased',
    power: 9,
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
    tags: ['hero', 'avenger', 'tech'],
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: 3,
    name: 'Black Widow',
    description: 'Natasha Romanoff – agentka S.H.I.E.L.D., mistrzyni walki wręcz i infiltracji.',
    series: 'Black Widow',
    status: 'active',
    power: 7,
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg',
    tags: ['hero', 'avenger', 'spy'],
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: 4,
    name: 'Thanos',
    description: 'Władca Tytanu, który pragnie "zbalansować" wszechświat eliminując połowę wszystkich istot.',
    series: 'Thanos',
    status: 'active',
    power: 10,
    imageUrl: 'https://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg',
    tags: ['villain', 'cosmic', 'infinity-gauntlet'],
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04')
  }
];