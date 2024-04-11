import { formatWordParts, isVerb, shuffleWordList, WordType } from '../types/WordType';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Card, Container, Form, Offcanvas } from 'react-bootstrap';
import WordCardQuestionHelp from './WordCardQuestionHelp';
import { LangEnum } from '../types/LangEnum';
import { CardState, cardStateLabel } from '../types/CardState';

interface WordCardQuestionLatProps {
  readonly words: WordType[];
}

function validate(word: WordType, value: string): boolean {
  return (
    word.translations.sort().join(',') ===
    value
      .split(',')
      .map((word) => word.trim())
      .sort()
      .join(',')
  );
}

export default function WordCardQuestionLat({ words }: WordCardQuestionLatProps) {
  const [wordList, setWordList] = useState([] as WordType[]);
  const [state, setState] = useState(CardState.Asked);
  const [isHelpVisible, setHelpVisible] = useState(false);
  const inputRefs = useRef<HTMLInputElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isValid, setValid] = useState(false);
  const [isInvalid, setInvalid] = useState(false);

  const reset = useCallback(() => {
    setAnswer('');
    setValid(false);
    setInvalid(false);
    setHelpVisible(false);
    inputRefs?.current?.focus();
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
      const isAnswerValid = validate(wordList[wordIndex], answer);
      setValid(isAnswerValid);
      setInvalid(!isAnswerValid);
      if (isAnswerValid) {
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
    reset();
    setState(CardState.Asked);
    setWordIndex(0);
    setWordList(words);
  }, [reset, words]);

  useEffect(() => {
    inputRefs?.current?.focus();
  }, [inputRefs]);

  return wordList.length > 0 ? (
    <Card>
      <Offcanvas
        show={isHelpVisible}
        keyboard={true}
        onHide={() => setHelpVisible(false)}
        onExited={() => inputRefs?.current?.focus()}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {isVerb(wordList[wordIndex]) ? 'Verb' + wordIndex : 'Noun' + wordIndex}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {<WordCardQuestionHelp word={wordList[wordIndex]} lang={LangEnum.LAT} />}
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
            <Card.Text>{formatWordParts(wordList[wordIndex])}</Card.Text>
          </>
        )}
        <div className="d-grid gap-2">
          <Form.Control
            {...{ isValid, isInvalid }}
            autoFocus={true}
            ref={inputRefs}
            size="lg"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyUp={(event) => event.key === 'Enter' && onClick()}
          />
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
