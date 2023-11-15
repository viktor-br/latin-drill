import { GrammarChart } from '../../../types/GrammarChart';

export const FirstPersonGrammarChart: GrammarChart = {
  title: '1st Person',
  data: {
    Singular: {
      Nom: 'ego',
      Acc: 'me',
      Gen: 'mei',
      Dat: 'mihi',
      Abl: 'me',
    },
    Plural: {
      Nom: 'nos',
      Acc: 'nos',
      Gen: 'nostrum',
      Dat: 'nobis',
      Abl: 'nobis',
    },
  },
};

export const SecondPersonGrammarChart: GrammarChart = {
  title: '2nd Person',
  data: {
    Singular: {
      Nom: 'tu',
      Acc: 'te',
      Gen: 'tui',
      Dat: 'tibi',
      Abl: 'te',
    },
    Plural: {
      Nom: 'vos',
      Acc: 'vos',
      Gen: 'vestrum',
      Dat: 'vobis',
      Abl: 'vobis',
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
        Gen: 'illius',
        Dat: 'illi',
        Abl: 'illo',
      },
      Feminine: {
        Nom: 'illa',
        Acc: 'illam',
        Gen: 'illius',
        Dat: 'illi',
        Abl: 'illa',
      },
      Neutral: {
        Nom: 'illud',
        Acc: 'illud',
        Gen: 'illius',
        Dat: 'illi',
        Abl: 'illo',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'illi',
        Acc: 'illos',
        Gen: 'illorum',
        Dat: 'illis',
        Abl: 'illis',
      },
      Feminine: {
        Nom: 'illae',
        Acc: 'illas',
        Gen: 'illarum',
        Dat: 'illis',
        Abl: 'illis',
      },
      Neutral: {
        Nom: 'illa',
        Acc: 'illa',
        Gen: 'illorum',
        Dat: 'illis',
        Abl: 'illis',
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
        Dat: 'ei',
        Abl: 'eo',
      },
      Feminine: {
        Nom: 'ea',
        Acc: 'eam',
        Gen: 'eius',
        Dat: 'ei',
        Abl: 'ea',
      },
      Neutral: {
        Nom: 'id',
        Acc: 'id',
        Gen: 'eius',
        Dat: 'ei',
        Abl: 'eo',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'ei',
        Acc: 'eos',
        Gen: 'eorum',
        Dat: 'eis',
        Abl: 'eis',
      },
      Feminine: {
        Nom: 'eae',
        Acc: 'eas',
        Gen: 'earum',
        Dat: 'eis',
        Abl: 'eis',
      },
      Neutral: {
        Nom: 'ea',
        Acc: 'ea',
        Gen: 'eorum',
        Dat: 'eis',
        Abl: 'eis',
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
        Abl: 'hoc',
      },
      Feminine: {
        Nom: 'haec',
        Acc: 'hanc',
        Gen: 'huius',
        Dat: 'huic',
        Abl: 'hac',
      },
      Neutral: {
        Nom: 'hoc',
        Acc: 'hoc',
        Gen: 'huius',
        Dat: 'huic',
        Abl: 'hoc',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'hi',
        Acc: 'hos',
        Gen: 'horum',
        Dat: 'his',
        Abl: 'his',
      },
      Feminine: {
        Nom: 'hae',
        Acc: 'has',
        Gen: 'harum',
        Dat: 'his',
        Abl: 'his',
      },
      Neutral: {
        Nom: 'haec',
        Acc: 'haec',
        Gen: 'horum',
        Dat: 'his',
        Abl: 'his',
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
        Gen: 'istius',
        Dat: 'isti',
        Abl: 'isto',
      },
      Feminine: {
        Nom: 'ista',
        Acc: 'istam',
        Gen: 'istius',
        Dat: 'isti',
        Abl: 'ista',
      },
      Neutral: {
        Nom: 'istud',
        Acc: 'istud',
        Gen: 'istius',
        Dat: 'isti',
        Abl: 'isto',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'isti',
        Acc: 'istos',
        Gen: 'istorum',
        Dat: 'istis',
        Abl: 'istis',
      },
      Feminine: {
        Nom: 'istae',
        Acc: 'istas',
        Gen: 'istarum',
        Dat: 'istis',
        Abl: 'istis',
      },
      Neutral: {
        Nom: 'ista',
        Acc: 'ista',
        Gen: 'istorum',
        Dat: 'istis',
        Abl: 'istis',
      },
    },
  },
};

export const QuiQuaeQuodGrammarChart: GrammarChart = {
  title: 'qui/quae/quod',
  data: {
    Singular: {
      Masculine: {
        Nom: 'qui',
        Acc: 'quem',
        Gen: 'cuius',
        Dat: 'cui',
        Abl: 'quo',
      },
      Feminine: {
        Nom: 'quae',
        Acc: 'quam',
        Gen: 'cuius',
        Dat: 'cui',
        Abl: 'qua',
      },
      Neutral: {
        Nom: 'quod',
        Acc: 'quod',
        Gen: 'cuius',
        Dat: 'cui',
        Abl: 'quo',
      },
    },
    Plural: {
      Masculine: {
        Nom: 'qui',
        Acc: 'quos',
        Gen: 'quorum',
        Dat: 'quibus',
        Abl: 'quibus',
      },
      Feminine: {
        Nom: 'quae',
        Acc: 'quas',
        Gen: 'quarum',
        Dat: 'quibus',
        Abl: 'quibus',
      },
      Neutral: {
        Nom: 'quae',
        Acc: 'quae',
        Gen: 'quorum',
        Dat: 'quibus',
        Abl: 'quibus',
      },
    },
  },
};
