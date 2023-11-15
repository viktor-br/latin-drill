import { Topic } from '../types/Topic';
import {
  FirstPersonGrammarChart,
  SecondPersonGrammarChart,
  IsEaIdGrammarChart,
  IlleIllaIlludGrammarChart,
  HicHaecHocGrammarChart,
  IsteIstaIstudGrammarChart,
  QuiQuaeQuodGrammarChart,
} from './grammar-charts/pronouns';

const Pronouns: Topic = {
  title: 'Pronouns',
  name: 'pronouns',
  topics: [
    { title: '1st Person', name: 'first-person', grammarChart: FirstPersonGrammarChart },
    { title: '2nd Person', name: 'second-person', grammarChart: SecondPersonGrammarChart },
    { title: 'ille/illa/illud', name: 'ille-illa-illud', grammarChart: IsEaIdGrammarChart },
    { title: 'is/ea/id', name: 'is-ea-id', grammarChart: IlleIllaIlludGrammarChart },
    { title: 'hic/haec/hoc', name: 'hic-haec-hoc', grammarChart: HicHaecHocGrammarChart },
    { title: 'iste/ista/istud', name: 'iste-ista-istud', grammarChart: IsteIstaIstudGrammarChart },
    { title: 'qui/quae/quod', name: 'qui-quae-quod', grammarChart: QuiQuaeQuodGrammarChart },
  ],
};

export default Pronouns;
