import { Question } from '../types/Question';
import { Answer } from '../types/Answer';

function ValidateAnswer(question: Question, userAnswer: Answer) {
  return question.rightAnswer.trim() === userAnswer.trim();
}

export default ValidateAnswer;
