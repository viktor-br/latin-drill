import { Noun } from './Noun';
import { Verb } from './Verb';

export type WordType = Verb | Noun;

export function isVerb(word: WordType): boolean {
  return 'principle1' in word;
}

export function isNoun(word: WordType): boolean {
  return 'gender' in word;
}

export function countPrinciples(word: WordType): number {
  if ('genitivePlural' in word && word.genitivePlural !== undefined) {
    return 3;
  } else if ('principle4' in word && word.principle4 !== undefined) {
    return 4;
  } else if ('principle3' in word && word.principle3 !== undefined) {
    return 3;
  }

  return 2;
}

export function formatWordParts(word: WordType): string {
  if (isVerb(word)) {
    const { principle1, principle2, principle3, principle4 } = word as Verb;

    if (principle4 === undefined) {
      return `${principle1}, ${principle2}, ${principle3}`;
    }

    return `${principle1}, ${principle2}, ${principle3}, ${principle4}`;
  }

  if (isNoun(word)) {
    const { gender, nominative, genitive, genitivePlural } = word as Noun;

    return genitivePlural
      ? `${nominative}, ${genitive}, ${genitivePlural} (${gender}.)`
      : `${nominative}, ${genitive} (${gender}.)`;
  }

  return '';
}

export function shuffleWordList(words: WordType[]): WordType[] {
  let currentIndex = words.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [words[currentIndex], words[randomIndex]] = [words[randomIndex], words[currentIndex]];
  }

  return words;
}
