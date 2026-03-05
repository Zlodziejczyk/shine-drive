export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  source: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Jacky',
    text: 'Reageert snel, vriendelijk en komt afspraken na. Top service!',
    rating: 5,
    source: 'Marktplaats',
  },
  {
    id: '2',
    name: 'Slingerland',
    text: 'Snelle reactie, zeer vriendelijk. Komt altijd op tijd. Aanrader!',
    rating: 5,
    source: 'Marktplaats',
  },
  {
    id: '3',
    name: 'Timmermiks',
    text: 'Alles perfect geregeld. Snel, betrouwbaar en op tijd. Top!',
    rating: 5,
    source: 'Marktplaats',
  },
  {
    id: '4',
    name: 'Dominique',
    text: 'Heel attent en vriendelijk. Reageert supersnel en houdt zich aan afspraken.',
    rating: 5,
    source: 'Marktplaats',
  },
  {
    id: '5',
    name: 'Danny',
    text: 'Vakkundige service, eerlijke prijzen. Mijn vaste adres voor alles rondom mijn auto.',
    rating: 5,
    source: 'Marktplaats',
  },
];
