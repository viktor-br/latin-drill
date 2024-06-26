import { WordTypeEnum } from '../types/WordTypeEnum';
import { LangEnum } from '../types/LangEnum';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import WordCardQuestionEng from './WordCardQuestionEng';
import words from '../topics/Words';
import WordCardQuestionLat from './WordCardQuestionLat';
import { WordType } from '../types/WordType';

export interface WordQuestionProps {
  readonly wordType?: WordTypeEnum;
  readonly questionLang: LangEnum;
}

export default function WordCardQuestion() {
  const location = useLocation();
  const [questionLang, setQuestionLang] = useState(LangEnum.ENG);
  const [currentWords, setCurrentWords] = useState([] as WordType[]);

  useEffect(() => {
    const [lang, wordType] = location.pathname.replace('/words/', '').split('/');
    setQuestionLang(lang === 'eng' ? LangEnum.ENG : LangEnum.LAT);
    setCurrentWords(
      wordType === undefined
        ? [...words.verbs, ...words.nouns]
        : wordType === 'verbs'
        ? [...words.verbs]
        : [...words.nouns],
    );
  }, [location.pathname]);

  return currentWords.length > 0 ? (
    questionLang === LangEnum.ENG ? (
      <WordCardQuestionEng words={currentWords} />
    ) : (
      <WordCardQuestionLat words={currentWords} />
    )
  ) : (
    <></>
  );
}
