import { Topic } from '../types/Topic';
import {
  PresentActiveIndicative,
  PerfectActiveIndicative,
  FutureActiveIndicative,
  PresentPassiveIndicative,
  PerfectPassiveIndicative,
  FuturePassiveIndicative,
  PresentActiveSubjunctive,
  ImperfectActiveSubjunctive,
  PresentPassiveSubjunctive,
  ImperfectPassiveSubjunctive,
} from './grammar-charts/conjugation/first';

const FirstConjugationActive: Topic = {
  title: 'Active',
  name: 'active',
  topics: [
    {
      title: 'Indicative',
      name: 'indicative',
      topics: [
        {
          title: 'Present',
          name: 'present',
          grammarChart: PresentActiveIndicative,
        },
        {
          title: 'Perfect',
          name: 'perfect',
          grammarChart: PerfectActiveIndicative,
        },
        {
          title: 'Future',
          name: 'future',
          grammarChart: FutureActiveIndicative,
        },
      ],
    },
    {
      title: 'Subjunctive',
      name: 'subjunctive',
      topics: [
        {
          title: 'Present',
          name: 'present',
          grammarChart: PresentActiveSubjunctive,
        },
        {
          title: 'Imperfect',
          name: 'imperfect',
          grammarChart: ImperfectActiveSubjunctive,
        },
      ],
    },
  ],
};

const FirstConjugationPassive: Topic = {
  title: 'Passive',
  name: 'passive',
  topics: [
    {
      title: 'Indicative',
      name: 'indicative',
      topics: [
        {
          title: 'Present',
          name: 'present',
          grammarChart: PresentPassiveIndicative,
        },
        {
          title: 'Perfect',
          name: 'perfect',
          grammarChart: PerfectPassiveIndicative,
        },
        {
          title: 'Future',
          name: 'future',
          grammarChart: FuturePassiveIndicative,
        },
      ],
    },
    {
      title: 'Subjunctive',
      name: 'subjunctive',
      topics: [
        {
          title: 'Present',
          name: 'present',
          grammarChart: PresentPassiveSubjunctive,
        },
        {
          title: 'Imperfect',
          name: 'imperfect',
          grammarChart: ImperfectPassiveSubjunctive,
        },
      ],
    },
  ],
};

const FirstConjugation: Topic = {
  title: 'First (amo,amare,amavi,amatus)',
  name: 'first',
  topics: [FirstConjugationActive, FirstConjugationPassive],
};

export default FirstConjugation;