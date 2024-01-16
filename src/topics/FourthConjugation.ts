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
  ImperfectActiveIndicative,
  ImperfectPassiveIndicative,
  PluperfectActiveIndicative,
  PluperfectPassiveIndicative,
  FuturePerfectActiveIndicative,
  FuturePerfectPassiveIndicative,
  PerfectActiveSubjunctive,
  PerfectPassiveSubjunctive,
  PluperfectActiveSubjunctive,
  PluperfectPassiveSubjunctive,
} from './grammar-charts/conjugation/fourth';

const FourthConjugationActive: Topic = {
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
          title: 'Imperfect',
          name: 'imperfect',
          grammarChart: ImperfectActiveIndicative,
        },
        {
          title: 'Pluperfect',
          name: 'pluperfect',
          grammarChart: PluperfectActiveIndicative,
        },
        {
          title: 'Future',
          name: 'future',
          grammarChart: FutureActiveIndicative,
        },
        {
          title: 'Future Perfect',
          name: 'future_perfect',
          grammarChart: FuturePerfectActiveIndicative,
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
        {
          title: 'Perfect',
          name: 'perfect',
          grammarChart: PerfectActiveSubjunctive,
        },
        {
          title: 'Pluperfect',
          name: 'pluperfect',
          grammarChart: PluperfectActiveSubjunctive,
        },
      ],
    },
  ],
};

const FourthConjugationPassive: Topic = {
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
          title: 'Imperfect',
          name: 'imprefect',
          grammarChart: ImperfectPassiveIndicative,
        },
        {
          title: 'Pluperfect',
          name: 'pluperfect',
          grammarChart: PluperfectPassiveIndicative,
        },
        {
          title: 'Future',
          name: 'future',
          grammarChart: FuturePassiveIndicative,
        },
        {
          title: 'Future Perfect',
          name: 'future_perfect',
          grammarChart: FuturePerfectPassiveIndicative,
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
        {
          title: 'Perfect',
          name: 'perfect',
          grammarChart: PerfectPassiveSubjunctive,
        },
        {
          title: 'Pluperfect',
          name: 'pluperfect',
          grammarChart: PluperfectPassiveSubjunctive,
        },
      ],
    },
  ],
};

const FourthConjugation: Topic = {
  title: 'Fourth (audio,audire,audivi,auditum)',
  name: 'fourth',
  topics: [FourthConjugationActive, FourthConjugationPassive],
};

export default FourthConjugation;
