import { Col, Row } from 'react-bootstrap';
import GrammarCardsNavigation from './GrammarCardsNavigation';
import GrammarCardQuestion from './GrammarCardQuestion';
import React, { useState } from 'react';
import GenerateGrammarCardsNavigation from '../service/GenerateGrammarCardsNavigation';
import useWindowInnerWidth, { Breakpoints } from '../hooks/useWindowInnerWidth';

export function GrammarCards() {
  const [navigation] = useState(GenerateGrammarCardsNavigation());

  const width = useWindowInnerWidth();

  return width > Breakpoints.XS ? (
    <Row>
      <Col sm={5}>
        <GrammarCardsNavigation {...{ navigation }} />
      </Col>
      <Col sm={6}>
        <GrammarCardQuestion {...{ prefix: '/grammar' }} />
      </Col>
      <Col sm={1}></Col>
    </Row>
  ) : (
    <>
      <GrammarCardsNavigation {...{ navigation }} />
      <GrammarCardQuestion {...{ prefix: '/grammar' }} />
    </>
  );
}
