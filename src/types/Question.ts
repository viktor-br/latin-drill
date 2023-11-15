import { Answer } from './Answer';
import { TopicPath } from './TopicPath';

export interface Question {
  readonly topicPath: TopicPath;
  readonly title: string;
  readonly text: string;
  readonly rightAnswer: Answer;
}
