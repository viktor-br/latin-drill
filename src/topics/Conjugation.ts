import { Topic } from '../types/Topic';
import FirstConjugation from './FirstConjugation';
import SecondConjugation from './SecondConjugation';
import ThirdConjugation from './ThirdConjugation';
import FourthConjugation from './FourthConjugation';
import MixedConjugation from './MixedConjugation';
import IrregularVerbsConjugation from './IrregularVerbsConjugation';

const Conjugation: Topic = {
  title: 'Conjugation',
  name: 'conjugation',
  topics: [
    FirstConjugation,
    SecondConjugation,
    ThirdConjugation,
    FourthConjugation,
    MixedConjugation,
    IrregularVerbsConjugation,
  ],
};
export default Conjugation;
