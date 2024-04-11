import useWindowInnerWidth, { Breakpoints } from '../hooks/useWindowInnerWidth';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import WordCardsNavigation from './WordCardsNavigation';
import WordCardQuestion from './WordCardQuestion';

export default function WordCards() {
  const width = useWindowInnerWidth();

  return width > Breakpoints.XS ? (
    <Row>
      <Col sm={5}>
        <WordCardsNavigation />
      </Col>
      <Col sm={6}>
        <WordCardQuestion />
      </Col>
      <Col sm={1}></Col>
    </Row>
  ) : (
    <>
      <WordCardsNavigation />
      <WordCardQuestion />
    </>
  );
}
