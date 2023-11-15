export type GrammarChartData = { [key: string]: GrammarChartData | string };

export type GrammarChart = {
  title: string;
  data: GrammarChartData;
};
