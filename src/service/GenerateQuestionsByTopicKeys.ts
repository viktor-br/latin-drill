import { Question } from '../types/Question';
import { GrammarChart, GrammarChartData } from '../types/GrammarChart';
import { GetTopicCardByKeys } from '../topics';
import { Topic } from '../types/Topic';
import { TopicPath } from '../types/TopicPath';

function GenerateQuestionsByGrammarChartData(
  grammarChartData: GrammarChartData,
  title: string,
  topicPath: TopicPath,
  names: string[],
): Question[] {
  const keys: string[] = Object.keys(grammarChartData);

  return keys.reduce((accumulator: Question[], key: string) => {
    const data = grammarChartData[key];
    if (typeof data !== 'string') {
      GenerateQuestionsByGrammarChartData(data, title, topicPath, [...names, key]).map((question) =>
        accumulator.push(question),
      );
    } else {
      accumulator.push({
        topicPath,
        title,
        text: [...names, key].join(', '),
        rightAnswer: data,
      });
    }

    return accumulator;
  }, []);
}
function GenerateQuestionsByGrammarChart(
  { data, title }: GrammarChart,
  topicPath: TopicPath,
): Question[] {
  return GenerateQuestionsByGrammarChartData(data, title, topicPath, []);
}

function GenerateQuestionsByTopic(
  { topics, grammarChart }: Topic,
  { titles, path }: TopicPath,
): Question[] {
  if (topics !== undefined && topics.length > 0) {
    return topics.reduce((accumulator: Question[], topic) => {
      GenerateQuestionsByTopic(topic, {
        titles: [...titles, topic.title],
        path: [...path, topic.name],
      }).map((question) => accumulator.push(question));

      return accumulator;
    }, []);
  } else if (grammarChart !== undefined) {
    return GenerateQuestionsByGrammarChart(grammarChart, {
      path,
      titles,
    });
  }

  return [];
}

function GenerateQuestionsByTopicKeys(topicKeys: string[]): Question[] {
  const { topic, parentTopics } = GetTopicCardByKeys(topicKeys);

  const topicPath = parentTopics.reduce(
    (topicPath: TopicPath, { title, name }: Topic) => {
      topicPath.titles.push(title);
      topicPath.path.push(name);
      return topicPath;
    },
    { titles: [], path: [] },
  );

  return GenerateQuestionsByTopic(topic, topicPath);
}

export default GenerateQuestionsByTopicKeys;
