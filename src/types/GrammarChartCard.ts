import { GrammarChart } from './GrammarChart';
import { Topic } from './Topic';

export interface GrammarChartCard {
  readonly grammarChart: GrammarChart;
  readonly topics: Topic[];
}
