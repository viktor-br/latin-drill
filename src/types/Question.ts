import { Answer } from './Answer';

export interface Question {
  readonly topicTitles: string[];
  readonly text: string;
  readonly rightAnswer: Answer;
}
