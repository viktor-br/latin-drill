import { GrammarChart } from '../../../types/GrammarChart';

export const FirstPersonGrammarChart: GrammarChart = {
  title: '1st Person',
  data: {
    Singular: {
      Nom: 'ego',
      Acc: 'mē',
      Gen: 'meī',
      Dat: 'mihi',
      Abl: 'mē',
    },
    Plural: {
      Nom: 'nōs',
      Acc: 'nōs',
      Gen: 'nostrum',
      Dat: 'nōbīs',
      Abl: 'nōbīs',
    },
  },
};

export const SecondPersonGrammarChart: GrammarChart = {
  title: '2nd Person',
  data: {
    Singular: {
      Nom: 'tū',
      Acc: 'tē',
      Gen: 'tuī',
      Dat: 'tibi',
      Abl: 'tē',
    },
    Plural: {
      Nom: 'vōs',
      Acc: 'vōs',
      Gen: 'vestrum',
      Dat: 'vōbīs',
      Abl: 'vōbīs',
    },
  },
};

export const IlleIllaIlludGrammarChart: GrammarChart = {
  title: 'ille/illa/illud',
  data: {
    Singular: {
      Masculine: {
        Nom: 'ille',
        Acc: 'illum',
        Gen: 'illīus',
        Dat: 'illī',
        Abl: 'illō',
      },
      Feminine: {
        Nom: 'illa',
        Acc: 'illam',
        Gen: 'illīus',
        Dat: 'illī',
        Abl: 'illā',
      },
      Neutral: {
        Nom: 'illud',
        Acc: 'illud',
        Gen: 'illīus',
        Dat: 'illī',
        Abl: 'illō',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'illī',
        Acc: 'illōs',
        Gen: 'illōrum',
        Dat: 'illīs',
        Abl: 'illīs',
      },
      Feminine: {
        Nom: 'illae',
        Acc: 'illās',
        Gen: 'illārum',
        Dat: 'illīs',
        Abl: 'illīs',
      },
      Neutral: {
        Nom: 'illa',
        Acc: 'illa',
        Gen: 'illōrum',
        Dat: 'illīs',
        Abl: 'illīs',
      },
    },
  },
};

export const IsEaIdGrammarChart: GrammarChart = {
  title: 'is/ea/id',
  data: {
    Singular: {
      Masculine: {
        Nom: 'is',
        Acc: 'eum',
        Gen: 'eius',
        Dat: 'eī',
        Abl: 'eō',
      },
      Feminine: {
        Nom: 'ea',
        Acc: 'eam',
        Gen: 'eius',
        Dat: 'eī',
        Abl: 'eā',
      },
      Neutral: {
        Nom: 'id',
        Acc: 'id',
        Gen: 'eius',
        Dat: 'eī',
        Abl: 'eō',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'eī',
        Acc: 'eōs',
        Gen: 'eōrum',
        Dat: 'eīs',
        Abl: 'eīs',
      },
      Feminine: {
        Nom: 'eae',
        Acc: 'eās',
        Gen: 'eārum',
        Dat: 'eīs',
        Abl: 'eīs',
      },
      Neutral: {
        Nom: 'ea',
        Acc: 'ea',
        Gen: 'eōrum',
        Dat: 'eīs',
        Abl: 'eīs',
      },
    },
  },
};

export const HicHaecHocGrammarChart: GrammarChart = {
  title: 'hic/haec/hoc',
  data: {
    Singular: {
      Masculine: {
        Nom: 'hic',
        Acc: 'hunc',
        Gen: 'huius',
        Dat: 'huic',
        Abl: 'hōc',
      },
      Feminine: {
        Nom: 'haec',
        Acc: 'hanc',
        Gen: 'huius',
        Dat: 'huic',
        Abl: 'hāc',
      },
      Neutral: {
        Nom: 'hoc',
        Acc: 'hoc',
        Gen: 'huius',
        Dat: 'huic',
        Abl: 'hōc',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'hī',
        Acc: 'hōs',
        Gen: 'hōrum',
        Dat: 'hīs',
        Abl: 'hīs',
      },
      Feminine: {
        Nom: 'hae',
        Acc: 'hās',
        Gen: 'hārum',
        Dat: 'hīs',
        Abl: 'hīs',
      },
      Neutral: {
        Nom: 'haec',
        Acc: 'haec',
        Gen: 'hōrum',
        Dat: 'hīs',
        Abl: 'hīs',
      },
    },
  },
};

export const IsteIstaIstudGrammarChart: GrammarChart = {
  title: 'iste/ista/istud',
  data: {
    Singular: {
      Masculine: {
        Nom: 'iste',
        Acc: 'istum',
        Gen: 'istīus',
        Dat: 'istī',
        Abl: 'istō',
      },
      Feminine: {
        Nom: 'ista',
        Acc: 'istam',
        Gen: 'istīus',
        Dat: 'istī',
        Abl: 'istā',
      },
      Neutral: {
        Nom: 'istud',
        Acc: 'istud',
        Gen: 'istīus',
        Dat: 'istī',
        Abl: 'istō',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'istī',
        Acc: 'istōs',
        Gen: 'istōrum',
        Dat: 'istīs',
        Abl: 'istīs',
      },
      Feminine: {
        Nom: 'istae',
        Acc: 'istās',
        Gen: 'istārum',
        Dat: 'istīs',
        Abl: 'istīs',
      },
      Neutral: {
        Nom: 'ista',
        Acc: 'ista',
        Gen: 'istōrum',
        Dat: 'istīs',
        Abl: 'istīs',
      },
    },
  },
};

export const QuiQuaeQuodGrammarChart: GrammarChart = {
  title: 'qui/quae/quod',
  data: {
    Singular: {
      Masculine: {
        Nom: 'quī',
        Acc: 'quem',
        Gen: 'cuius',
        Dat: 'cui',
        Abl: 'quō',
      },
      Feminine: {
        Nom: 'quae',
        Acc: 'quam',
        Gen: 'cuius',
        Dat: 'cui',
        Abl: 'quā',
      },
      Neutral: {
        Nom: 'quod',
        Acc: 'quod',
        Gen: 'cuius',
        Dat: 'cui',
        Abl: 'quō',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'quī',
        Acc: 'quōs',
        Gen: 'quōrum',
        Dat: 'quībus',
        Abl: 'quībus',
      },
      Feminine: {
        Nom: 'quae',
        Acc: 'quās',
        Gen: 'quārum',
        Dat: 'quibus',
        Abl: 'quibus',
      },
      Neutral: {
        Nom: 'quae',
        Acc: 'quae',
        Gen: 'quōrum',
        Dat: 'quibus',
        Abl: 'quibus',
      },
    },
  },
};
