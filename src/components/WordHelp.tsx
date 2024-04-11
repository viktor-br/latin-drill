import { formatWordParts, isNoun, isVerb, WordType } from '../types/WordType';
import { LangEnum } from '../types/LangEnum';
import { useEffect, useState } from 'react';

interface WordHelpProps {
  readonly word: WordType;
  readonly lang: LangEnum;
}

export default function WordHelp({ word, lang }: WordHelpProps) {
  const [latin, setLatin] = useState(formatWordParts(word));
  const [translations, setTranslations] = useState(word.translations.join(', '));
  const [language, setLanguage] = useState(lang);

  useEffect(() => {
    setLatin(formatWordParts(word));
    setTranslations(word.translations.join(', '));
  }, [word]);

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

  return (
    <div>
      <div>{language === LangEnum.ENG ? translations : latin}</div>
      <div>{language === LangEnum.ENG ? latin : translations}</div>
    </div>
  );
}
