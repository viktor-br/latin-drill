import { GrammarChart } from '../../../../types/GrammarChart';

export const PresentActiveIndicative: GrammarChart = {
  title: 'Present Active Indicative',
  data: {
    Singular: {
      '1st Person': 'possum',
      '2nd Person': 'potes',
      '3rd Person': 'potest',
    },
    Plural: {
      '1st Person': 'possumus',
      '2nd Person': 'potestis',
      '3rd Person': 'possunt',
    },
  },
};

export const PerfectActiveIndicative: GrammarChart = {
  title: 'Perfect Active Indicative',
  data: {
    Singular: {
      '1st Person': 'potuī',
      '2nd Person': 'potuistī',
      '3rd Person': 'potuit',
    },
    Plural: {
      '1st Person': 'potuimus',
      '2nd Person': 'potuistis',
      '3rd Person': 'potuērunt',
    },
  },
};

export const FutureActiveIndicative: GrammarChart = {
  title: 'Future Active Indicative',
  data: {
    Singular: {
      '1st Person': 'poterō',
      '2nd Person': 'poteris',
      '3rd Person': 'poterit',
    },
    Plural: {
      '1st Person': 'poterimus',
      '2nd Person': 'poteritis',
      '3rd Person': 'poterunt',
    },
  },
};

export const PresentActiveSubjunctive: GrammarChart = {
  title: 'Present Active Subjunctive',
  data: {
    Singular: {
      '1st Person': 'possim',
      '2nd Person': 'possīs',
      '3rd Person': 'possit',
    },
    Plural: {
      '1st Person': 'possīmus',
      '2nd Person': 'possītis',
      '3rd Person': 'possint',
    },
  },
};

export const ImperfectActiveSubjunctive: GrammarChart = {
  title: 'Imperfect Active Subjunctive',
  data: {
    Singular: {
      '1st Person': 'possem',
      '2nd Person': 'possēs',
      '3rd Person': 'posset',
    },
    Plural: {
      '1st Person': 'possēmus',
      '2nd Person': 'possētis',
      '3rd Person': 'possent',
    },
  },
};

export const ImperfectActiveIndicative: GrammarChart = {
  title: 'Imperfect Active Indicative',
  data: {
    Singular: {
      '1st Person': 'poteram',
      '2nd Person': 'poterās',
      '3rd Person': 'poterat',
    },
    Plural: {
      '1st Person': 'poterāmus',
      '2nd Person': 'poterātis',
      '3rd Person': 'poterant',
    },
  },
};
