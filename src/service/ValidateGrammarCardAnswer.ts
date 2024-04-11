import { Question } from '../types/Question';
import { Answer } from '../types/Answer';

function removeDiacritic(s: string): string {
  return s
    .trim()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

export default function ValidateGrammarCardAnswer(question: Question, userAnswer: Answer) {
  return removeDiacritic(question.rightAnswer) === removeDiacritic(userAnswer);
}
