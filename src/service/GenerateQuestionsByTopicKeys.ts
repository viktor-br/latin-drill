import { Question } from '../types/Question';
import { GrammarChart, GrammarChartData } from '../types/GrammarChart';
import { GetTopicCardByKeys } from '../topics';
import { Topic } from '../types/Topic';

function GenerateQuestionsByGrammarChartData(
  grammarChartData: GrammarChartData,
  title: string,
  parentTopicTitles: string[],
  names: string[],
): Question[] {
  const keys: string[] = Object.keys(grammarChartData);

  return keys.reduce((accumulator: Question[], key: string) => {
    const data = grammarChartData[key];
    if (typeof data !== 'string') {
      GenerateQuestionsByGrammarChartData(data, title, parentTopicTitles, [...names, key]).map(
        (question) => accumulator.push(question),
      );
    } else {
      accumulator.push({
        topicTitles: parentTopicTitles,
        text: [title, ...names, key].join(', '),
        rightAnswer: data,
      });
    }

    return accumulator;
  }, []);
}
function GenerateQuestionsByGrammarChart(
  { data, title }: GrammarChart,
  parentTopicTitles: string[],
): Question[] {
  return GenerateQuestionsByGrammarChartData(data, title, parentTopicTitles, []);
}

function GenerateQuestionsByTopic(
  { topics, grammarChart }: Topic,
  parentTopicTitles: string[],
): Question[] {
  if (topics !== undefined && topics.length > 0) {
    return topics.reduce((accumulator: Question[], topic) => {
      GenerateQuestionsByTopic(topic, [...parentTopicTitles, topic.title]).map((question) =>
        accumulator.push(question),
      );

      return accumulator;
    }, []);
  } else if (grammarChart !== undefined) {
    parentTopicTitles.pop();
    return GenerateQuestionsByGrammarChart(grammarChart, parentTopicTitles);
  }

  return [];
}

function GenerateQuestionsByTopicKeys(topicKeys: string[]): Question[] {
  const { topic, parentTopics } = GetTopicCardByKeys(topicKeys);
  const parentTopicTitles = parentTopics.map(({ title }: Topic) => title);

  return GenerateQuestionsByTopic(topic, parentTopicTitles);
}

export default GenerateQuestionsByTopicKeys;
