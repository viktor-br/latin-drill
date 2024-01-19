import { Topic } from '../types/Topic';

import CreateConjugationActive from './CreateConjugationActive';

const EoConjugation: Topic = {
  title: 'eo,ire,īvī,-',
  name: 'eo',
  topics: [await CreateConjugationActive('irregular/eo')],
};

const PossumConjugation: Topic = {
  title: 'possum,posse,potuī,-',
  name: 'possum',
  topics: [await CreateConjugationActive('irregular/possum')],
};

const SumConjugation: Topic = {
  title: 'sum,esse,fuī,-',
  name: 'sum',
  topics: [await CreateConjugationActive('irregular/sum')],
};

const VoloConjugation: Topic = {
  title: 'volō,velle,voluī,-',
  name: 'volo',
  topics: [await CreateConjugationActive('irregular/volo')],
};

const IrregularVerbsConjugation: Topic = {
  title: 'Irregular Verbs',
  name: 'irregular',
  topics: [VoloConjugation, SumConjugation, PossumConjugation, EoConjugation],
};

export default IrregularVerbsConjugation;
