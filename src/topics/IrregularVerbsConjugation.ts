import { Topic } from '../types/Topic';
import VoloConjugation from './VoloConjugation';
import SumConjugation from './SumConjugation';
import PossumConjugation from './PossumConjugation';
import EoConjugation from './EoConjugation';

const IrregularVerbsConjugation: Topic = {
  title: 'Irregular Verbs',
  name: 'irregular',
  topics: [VoloConjugation, SumConjugation, PossumConjugation, EoConjugation],
};

export default IrregularVerbsConjugation;
