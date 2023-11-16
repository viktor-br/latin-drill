import { Topic } from '../types/Topic';
import {
  FourthDeclensionMasculineFeminine,
  FourthDeclensionNeuter,
} from './grammar-charts/declension/fourth';
import {
  FifthDeclensionFeminine,
  FifthDeclensionMasculine,
} from './grammar-charts/declension/fifth';
import {
  ThirdDeclensionIStemMasculine,
  ThirdDeclensionIStemNeuter,
  ThirdDeclensionMasculine,
  ThirdDeclensionNeuter,
} from './grammar-charts/declension/third';
import { FirstDeclensionGrammarChart } from './grammar-charts/declension/first';
import {
  SecondDeclensionMasculine,
  SecondDeclensionMasculineInR,
  SecondDeclensionMasculineInUs,
  SecondDeclensionNeuter,
} from './grammar-charts/declension/second';

const FirstDeclension: Topic = {
  title: 'First',
  name: 'first',
  grammarChart: FirstDeclensionGrammarChart,
};

const SecondDeclension: Topic = {
  title: 'Second',
  name: 'second',
  topics: [
    { title: 'Masculine', name: 'masculine', grammarChart: SecondDeclensionMasculine },
    { title: 'Neuter', name: 'neuter', grammarChart: SecondDeclensionNeuter },
    {
      title: 'Masculine in -r',
      name: 'masculine_in_r',
      grammarChart: SecondDeclensionMasculineInR,
    },
    {
      title: 'Masculine in -us',
      name: 'masculine_in_us',
      grammarChart: SecondDeclensionMasculineInUs,
    },
  ],
};

const ThirdDeclension: Topic = {
  title: 'Third',
  name: 'third',
  topics: [
    { title: 'Masculine', name: 'masculine', grammarChart: ThirdDeclensionMasculine },
    { title: 'Neuter', name: 'neuter', grammarChart: ThirdDeclensionNeuter },
    {
      title: 'Masculine I-Stem',
      name: 'masculine_i_stem',
      grammarChart: ThirdDeclensionIStemMasculine,
    },
    { title: 'Neuter I-Stem', name: 'neuter_i_stem', grammarChart: ThirdDeclensionIStemNeuter },
  ],
};

const FourthDeclension: Topic = {
  title: 'Fourth',
  name: 'fourth',
  topics: [
    {
      title: 'Masculine & Feminine',
      name: 'masculine_feminine',
      grammarChart: FourthDeclensionMasculineFeminine,
    },
    { title: 'Neuter', name: 'neuter', grammarChart: FourthDeclensionNeuter },
  ],
};

const FifthDeclension: Topic = {
  title: 'Fifth',
  name: 'fifth',
  topics: [
    {
      title: 'Masculine',
      name: 'masculine',
      grammarChart: FifthDeclensionMasculine,
    },
    { title: 'Feminine', name: 'feminine', grammarChart: FifthDeclensionFeminine },
  ],
};

const Declension: Topic = {
  title: 'Declension',
  name: 'declension',
  topics: [FirstDeclension, SecondDeclension, ThirdDeclension, FourthDeclension, FifthDeclension],
};
export default Declension;
