const CreateConjugationPassive = async (name: string) => {
  const {
    PresentPassiveIndicative,
    PerfectPassiveIndicative,
    FuturePassiveIndicative,
    PresentPassiveSubjunctive,
    ImperfectPassiveSubjunctive,
    ImperfectPassiveIndicative,
    PluperfectPassiveIndicative,
    FuturePerfectPassiveIndicative,
    PerfectPassiveSubjunctive,
    PluperfectPassiveSubjunctive,
  } = await import(`./grammar-charts/conjugation/${name}`);

  return {
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
};

export default CreateConjugationPassive;
