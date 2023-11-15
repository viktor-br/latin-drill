import { Topic } from '../types/Topic';
import Pronouns from './Pronouns';
import Conjugation from './Conjugation';
import { TopicCard } from '../types/TopicCard';

export const rootTopic: Topic = {
  title: 'Root',
  name: 'root',
  topics: [Pronouns, Conjugation],
};

export function GetTopicCardByKeys(keys: string[]): TopicCard {
  const reversedKeys = keys.reverse();
  let topic = rootTopic;
  const topics: Topic[] = [];

  while (reversedKeys.length > 0) {
    const key = reversedKeys.pop();

    if (topic.topics === undefined) {
      return { topic, parentTopics: topics };
    }

    const subTopics = topic.topics.filter(({ name }) => name === key);
    if (subTopics.length !== 0) {
      topic = subTopics[0];
      topics.push(topic);
    }
  }

  return { topic, parentTopics: topics };
}