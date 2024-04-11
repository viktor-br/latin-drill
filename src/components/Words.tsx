import useWindowInnerWidth, { Breakpoints } from '../hooks/useWindowInnerWidth';
import { Col, Row } from 'react-bootstrap';
import CardsNavigation from './CardsNavigation';
import QuestionCard from './QuestionCard';
import React from 'react';
import WordsNavigation from './WordsNavigation';
import WordQuestion from './WordQuestion';

export default function Words() {
  const width = useWindowInnerWidth();

  return width > Breakpoints.XS ? (
    <Row>
      <Col sm={5}>
        <WordsNavigation />
      </Col>
      <Col sm={6}>
        <WordQuestion />
      </Col>
      <Col sm={1}></Col>
    </Row>
  ) : (
    <>
      <WordsNavigation />
      <WordQuestion />
    </>
  );
}
