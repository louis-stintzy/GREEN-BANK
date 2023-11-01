type Question = {
  id: number;
  question: string;
  note: 'vehicleNote' | 'energyNote' | 'kmNote' | 'yearNote';
  answers: {
    id: number;
    answer: string;
    value: number;
  }[];
};

const questions: Question[] = [
  {
    id: 1,
    question: 'Quel est le type de véhicule ?',
    note: 'vehicleNote',
    answers: [
      { id: 1, answer: 'Citadine', value: 8 },
      { id: 2, answer: 'Cabriolet', value: 6 },
      { id: 3, answer: 'Berline', value: 6.5 },
      { id: 4, answer: 'SUV', value: 4 },
    ],
  },
  {
    id: 2,
    question: "Quel est le type d'énergie du véhicule?",
    note: 'energyNote',
    answers: [
      { id: 1, answer: 'Essence', value: 5 },
      { id: 2, answer: 'Electrique', value: 9 },
      { id: 3, answer: 'Gaz', value: 6 },
      { id: 4, answer: 'Diesel', value: 4 },
      { id: 5, answer: 'Hybride', value: 7 },
    ],
  },
  {
    id: 3,
    question: 'Quel est votre kilométrage annuel ?',
    note: 'kmNote',
    answers: [
      { id: 1, answer: 'Moins de 10 000 km', value: 9 },
      { id: 2, answer: 'Entre 10 000 et 15 000 km', value: 7 },
      { id: 3, answer: 'Entre 15 000 et 20 000 km', value: 5 },
      { id: 4, answer: 'Entre 20 000 et 25 000 km', value: 3 },
      { id: 5, answer: 'Plus de 25 000 km', value: 1 },
    ],
  },
  {
    id: 4,
    question: 'Quelle est la date de la première immatriculation?',
    note: 'yearNote',
    answers: [
      { id: 1, answer: '1960 - 1969', value: 1 },
      { id: 2, answer: '1970 - 1979', value: 2 },
      { id: 3, answer: '1980 - 1989', value: 3 },
      { id: 4, answer: '1990 - 1999', value: 4 },
      { id: 5, answer: '2000 - 2009', value: 5 },
      { id: 6, answer: 'Après 2010', value: 7 },
    ],
  },
];

export default questions;
