import { NavigationElement } from '../types/NavigationElement';
import { rootTopic } from '../topics';
import { Topic } from '../types/Topic';

function createCardsNavigationElementFromTopic({ title, name, topics }: Topic): NavigationElement {
  const subElements: NavigationElement[] =
    topics !== undefined && topics.length > 0
      ? topics.map((topic) => createCardsNavigationElementFromTopic(topic))
      : [];

  return {
    label: title,
    name,
    subElements,
  };
}

export default function GenerateCardsNavigation(): NavigationElement[] {
  if (rootTopic.topics === undefined) {
    throw new Error('rootTopic should have sub topics');
  }
  return rootTopic.topics.map((topic) => createCardsNavigationElementFromTopic(topic));
}
