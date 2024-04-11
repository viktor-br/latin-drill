import { Verb } from '../types/Verb';
import { Noun } from '../types/Noun';
import Gender from '../types/Gender';

export function NewVerb(
  translations: string[],
  principle1: string,
  principle2: string,
  principle3: string,
  principle4?: string,
): Verb {
  return {
    translations,
    principle1,
    principle2,
    principle3,
    principle4,
  };
}

export function NewNoun(
  translations: string[],
  gender: Gender,
  nominative: string,
  genitive: string,
  genitivePlural?: string,
): Noun {
  return {
    translations,
    gender,
    nominative,
    genitive,
    genitivePlural,
  };
}
