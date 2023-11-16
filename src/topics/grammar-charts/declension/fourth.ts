import { GrammarChart } from '../../../types/GrammarChart';

export const FourthDeclensionMasculineFeminine: GrammarChart = {
  title: 'gradus, gradūs (m.)',
  data: {
    Singular: {
      Nom: 'gradus',
      Acc: 'gradum',
      Gen: 'gradūs',
      Dat: 'graduī',
      Abl: 'gradū',
    },
    Plural: {
      Nom: 'gradūs',
      Acc: 'gradūs',
      Gen: 'graduum',
      Dat: 'gradibus',
      Abl: 'gradibus',
    },
  },
};

export const FourthDeclensionNeuter: GrammarChart = {
  title: 'genū, genūs (n.)',
  data: {
    Singular: {
      Nom: 'genū',
      Acc: 'genū',
      Gen: 'genūs',
      Dat: 'genū',
      Abl: 'genū',
    },
    Plural: {
      Nom: 'genua',
      Acc: 'genua',
      Gen: 'genuum',
      Dat: 'genibus',
      Abl: 'genibus',
    },
  },
};
