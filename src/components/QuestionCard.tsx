import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Question } from '../types/Question';
import GenerateQuestionsByTopicKeys from '../service/GenerateQuestionsByTopicKeys';
import { useLocation } from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';
import ValidateAnswer from '../service/ValidateAnswer';

export interface CardProps {
  readonly prefix: string;
}

enum CardState {
  Asked = 1,
  Answered,
  Completed,
}

function extractTopicKeys(path: string): string[] {
  return path.split('/').filter((s) => s !== '');
}

function buttonLabel(state: CardState) {
  switch (state) {
    case CardState.Asked:
      return 'Answer';
    case CardState.Answered:
      return 'Next';
    case CardState.Completed:
      return 'Repeat Questions';
  }
}

function shuffle(questions: Question[]) {
  let currentIndex = questions.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [questions[currentIndex], questions[randomIndex]] = [
      questions[randomIndex],
      questions[currentIndex],
    ];
  }

  return questions;
}

export default function QuestionCard({ prefix }: CardProps) {
  const location = useLocation();
  const [state, setState] = useState(CardState.Asked);
  const [questionIndex, setQuestionIndex]: [number, any] = useState(0);
  const [questions, setQuestions]: [Question[], any] = useState([]);
  const [answer, setAnswer] = useState('');
  const [isValid, setValid] = useState(false);
  const [isInvalid, setInvalid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const reset = useCallback(() => {
    setValid(false);
    setInvalid(false);
    setAnswer('');
    inputRef?.current?.focus();
  }, []);

  const onAnswerChanged = (answer: string) => {
    setAnswer(answer);
  };

  const onClick = () => {
    if (state === CardState.Answered) {
      reset();
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex((index: number) => index + 1);
        setState(CardState.Asked);
      } else {
        setState(CardState.Completed);
      }
    } else if (state === CardState.Asked) {
      const isAnswerValid =
        questions.length > 0 ? ValidateAnswer(questions[questionIndex], answer) : false;
      setValid(isAnswerValid);
      setInvalid(!isAnswerValid);

      if (isAnswerValid) {
        setState(CardState.Answered);
      }
    } else {
      reset();
      setState(CardState.Asked);
      setQuestions(shuffle(questions));
      setQuestionIndex(0);
    }
  };

  useEffect(() => {
    setQuestions(
      shuffle(
        GenerateQuestionsByTopicKeys(extractTopicKeys(location.pathname.replace(prefix, ''))),
      ),
    );
  }, [location.pathname, prefix]);

  return questions.length > 0 ? (
    <Card>
      <Card.Body>
        {state !== CardState.Completed && (
          <>
            <Card.Title>{questions[questionIndex].topicTitles.join(' / ')}</Card.Title>
            <Card.Text>{questions[questionIndex].text}</Card.Text>
          </>
        )}
        <div className="d-grid gap-2">
          <Form.Control
            {...{ isValid, isInvalid }}
            autoFocus={true}
            ref={inputRef}
            size="lg"
            type="text"
            value={answer}
            onChange={(e) => onAnswerChanged(e.target.value)}
            onKeyUp={(event) => event.key === 'Enter' && onClick()}
          />
          <Button variant="primary" size="lg" onClick={() => onClick()}>
            {buttonLabel(state)}
          </Button>
        </div>
      </Card.Body>
    </Card>
  ) : (
    <></>
  );
}
