import Gender from './Gender';

export interface Noun {
  translations: string[];
  gender: Gender;
  nominative: string;
  genitive: string;
  genitivePlural?: string;
}
