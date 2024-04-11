import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Question } from '../types/Question';
import GenerateQuestionsByTopicKeys from '../service/GenerateQuestionsByTopicKeys';
import { useLocation } from 'react-router-dom';
import { Button, Form, Card, Container, Offcanvas } from 'react-bootstrap';
import ValidateAnswer from '../service/ValidateAnswer';
import QuestionHelp from './QuestionHelp';
import { CardState, cardStateLabel } from '../types/CardState';

export interface CardProps {
  readonly prefix: string;
}

function extractTopicKeys(path: string): string[] {
  return path.split('/').filter((s) => s !== '');
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
  const [isHelpVisible, setHelpVisible] = useState(false);

  const reset = useCallback(() => {
    setValid(false);
    setInvalid(false);
    setAnswer('');
    setHelpVisible(false);
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
    setState(CardState.Asked);
    reset();
    setQuestionIndex(0);
    setQuestions(
      shuffle(
        GenerateQuestionsByTopicKeys(extractTopicKeys(location.pathname.replace(prefix, ''))),
      ),
    );
  }, [location.pathname, prefix, reset]);

  return questions.length > 0 ? (
    <Card>
      <Offcanvas
        show={isHelpVisible}
        keyboard={true}
        onHide={() => setHelpVisible(false)}
        onExited={() => inputRef?.current?.focus()}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{questions[questionIndex].title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <QuestionHelp
            {...{
              path: questions[questionIndex].topicPath.path,
            }}
          />
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
            <Card.Title>
              {questions[questionIndex].topicPath.titles.slice(0, -1).join(' / ')}
            </Card.Title>
            <Card.Text>
              {questions[questionIndex].title}, {questions[questionIndex].text}
            </Card.Text>
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
            {cardStateLabel(state)}
          </Button>
        </div>
      </Card.Body>
    </Card>
  ) : (
    <></>
  );
}
