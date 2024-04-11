import { Button, Card, Container, Form, Offcanvas } from 'react-bootstrap';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { countPrinciples, isVerb, shuffleWordList, WordType } from '../types/WordType';
import { Verb } from '../types/Verb';
import { Noun } from '../types/Noun';
import WordHelp from './WordHelp';
import { LangEnum } from '../types/LangEnum';
import { CardState, cardStateLabel } from '../types/CardState';

interface WordQuestionEngProps {
  readonly words: WordType[];
}

function removeDiacritic(s: string): string {
  return s
    .trim()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

function validateSingle(word: WordType, val: string, index: number): boolean {
  if ('principle1' in word) {
    const { principle1, principle2, principle3, principle4 = '' } = word as Verb;
    const expected = [principle1, principle2, principle3, principle4];
    return val === removeDiacritic(expected[index] ?? '');
  } else if ('nominative' in word) {
    const { nominative, genitive, genitivePlural = '' } = word as Noun;
    const expected = [nominative, genitive, genitivePlural];
    return val === removeDiacritic(expected[index] ?? '');
  }

  return false;
}

function validateAll(word: WordType, ...values: string[]): boolean {
  if ('principle1' in word) {
    const { principle1, principle2, principle3, principle4 = '' } = word as Verb;
    const [val1, val2, val3 = '', val4 = ''] = values;

    return (
      removeDiacritic(principle1) === val1 &&
      removeDiacritic(principle2) === val2 &&
      removeDiacritic(principle3) === val3 &&
      removeDiacritic(principle4) === val4
    );
  } else if ('nominative' in word) {
    const { nominative, genitive, genitivePlural = '' } = word as Noun;
    const [val1, val2, val3 = ''] = values;

    return (
      removeDiacritic(nominative) === val1 &&
      removeDiacritic(genitive) === val2 &&
      removeDiacritic(genitivePlural) === val3
    );
  }

  return false;
}

export default function WordQuestionEng({ words }: WordQuestionEngProps) {
  const [wordList, setWordList] = useState([] as WordType[]);
  const [state, setState] = useState(CardState.Asked);
  const [isHelpVisible, setHelpVisible] = useState(false);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [inputCounts, setInputCounts] = useState(0);
  const [currentInput, setCurrentInput] = useState(0);
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [isValid, setValid] = useState([false, false, false, false]);
  const [isInvalid, setInvalid] = useState([false, false, false, false]);

  const reset = useCallback(() => {
    setAnswers(['', '', '', '']);
    setHelpVisible(false);
    inputRefs?.current[0]?.focus();
    setValid([false, false, false, false]);
    setInvalid([false, false, false, false]);
  }, [inputRefs]);

  const onClick = () => {
    if (state === CardState.Answered) {
      reset();
      if (wordIndex + 1 < words.length) {
        setWordIndex((val) => val + 1);
        setState(CardState.Asked);
      } else {
        setState(CardState.Completed);
      }
    } else if (state === CardState.Asked) {
      const isSingleValid = validateSingle(
        wordList[wordIndex],
        answers[currentInput],
        currentInput,
      );
      let v1 = [...isValid];
      v1[currentInput] = isSingleValid;
      let v2 = [...isInvalid];
      v2[currentInput] = !isSingleValid;
      setValid(v1);
      setInvalid(v2);
      if (isSingleValid && currentInput < inputCounts) {
        setCurrentInput((val) => val + 1);
      }
      if (validateAll(wordList[wordIndex], ...answers)) {
        setState(CardState.Answered);
      }
    } else {
      reset();
      setWordIndex(0);
      setWordList(shuffleWordList(wordList));
      setState(CardState.Asked);
    }
  };

  useEffect(() => {
    wordList.length > 0 && setInputCounts(countPrinciples(wordList[wordIndex]));
    setState(CardState.Asked);
  }, [wordList, wordIndex]);

  useEffect(() => {
    reset();
    setWordList(shuffleWordList(words));
  }, [words]);

  useEffect(() => {
    inputRefs?.current[currentInput]?.focus();
  }, [inputRefs, currentInput]);

  return wordList.length > 0 ? (
    <Card>
      <Offcanvas
        show={isHelpVisible}
        keyboard={true}
        onHide={() => setHelpVisible(false)}
        onExited={() => inputRefs?.current[currentInput]?.focus()}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {isVerb(wordList[wordIndex]) ? 'Verb' + wordIndex : 'Noun' + wordIndex}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {<WordHelp word={wordList[wordIndex]} lang={LangEnum.ENG} />}
        </Offcanvas.Body>
      </Offcanvas>
      <Card.Header>
        <Container
          className="d-flex d-row justify-content-end p-0"
          onClick={() => setHelpVisible(!isHelpVisible)}>
          <i className="bi bi-info-square"></i>
        </Container>
      </Card.Header>
      <Card.Body>
        {state !== CardState.Completed && (
          <>
            <Card.Title>{isVerb(wordList[wordIndex]) ? 'Verb' : 'noun'}</Card.Title>
            <Card.Text>{wordList[wordIndex].translations.join(', ')}</Card.Text>
          </>
        )}
        <div className="d-grid gap-2">
          <Form.Control
            {...{ isValid: isValid[0], isInvalid: isInvalid[0] }}
            autoFocus={true}
            ref={(element: HTMLInputElement) => (inputRefs.current[0] = element)}
            size="lg"
            type="text"
            value={answers[0]}
            onChange={(e) => setAnswers([e.target.value, ...answers.slice(1)])}
            onKeyUp={(event) => event.key === 'Enter' && onClick()}
            onFocus={() => setCurrentInput(0)}
          />
          {state !== CardState.Completed && (
            <Form.Control
              {...{ isValid: isValid[1], isInvalid: isInvalid[1] }}
              autoFocus={false}
              ref={(element: HTMLInputElement) => (inputRefs.current[1] = element)}
              size="lg"
              type="text"
              value={answers[1]}
              onChange={(e) => setAnswers([answers[0], e.target.value, ...answers.slice(2)])}
              onKeyUp={(event) => event.key === 'Enter' && onClick()}
              onFocus={() => setCurrentInput(1)}
            />
          )}
          {state !== CardState.Completed && inputCounts >= 3 && (
            <Form.Control
              {...{ isValid: isValid[2], isInvalid: isInvalid[2] }}
              autoFocus={false}
              ref={(element: HTMLInputElement) => (inputRefs.current[2] = element)}
              size="lg"
              type="text"
              value={answers[2]}
              onChange={(e) => setAnswers([...answers.slice(0, 2), e.target.value, answers[3]])}
              onKeyUp={(event) => event.key === 'Enter' && onClick()}
              onFocus={() => setCurrentInput(2)}
            />
          )}
          {state !== CardState.Completed && inputCounts >= 4 && (
            <Form.Control
              {...{ isValid: isValid[3], isInvalid: isInvalid[3] }}
              autoFocus={false}
              ref={(element: HTMLInputElement) => (inputRefs.current[3] = element)}
              size="lg"
              type="text"
              value={answers[3]}
              onChange={(e) => setAnswers([...answers.slice(0, 3), e.target.value])}
              onKeyUp={(event) => event.key === 'Enter' && onClick()}
              onFocus={() => setCurrentInput(3)}
            />
          )}
          <Button variant="primary" size="lg" onClick={() => onClick()}>
            {cardStateLabel(state)}
          </Button>
        </div>
      </Card.Body>
    </Card>
  ) : (
    <></>
  );
}
