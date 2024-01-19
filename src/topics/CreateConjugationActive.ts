const CreateConjugationActive = async (name: string) => {
  const {
    PresentActiveIndicative,
    PerfectActiveIndicative,
    FutureActiveIndicative,
    PresentActiveSubjunctive,
    ImperfectActiveSubjunctive,
    ImperfectActiveIndicative,
    PluperfectActiveIndicative,
    FuturePerfectActiveIndicative,
    PerfectActiveSubjunctive,
    PluperfectActiveSubjunctive,
  } = await import(`./grammar-charts/conjugation/${name}`);

  return {
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
};

export default CreateConjugationActive;
