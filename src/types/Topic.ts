import { GrammarChart } from './GrammarChart';

export interface Topic {
  readonly title: string;
  readonly name: string;
  readonly topics?: Topic[];
  readonly grammarChart?: GrammarChart;
}
