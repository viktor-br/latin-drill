import { Topic } from './Topic';

export interface TopicCard {
  readonly topic: Topic;
  parentTopics: Topic[];
}
