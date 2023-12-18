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
} from './grammar-charts/conjugation/mixed';

const MixedConjugationActive: Topic = {
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

const MixedConjugationPassive: Topic = {
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

const MixedConjugation: Topic = {
  title: 'Mixed (capio,capere,cepi,captum)',
  name: 'mixed',
  topics: [MixedConjugationActive, MixedConjugationPassive],
};

export default MixedConjugation;
