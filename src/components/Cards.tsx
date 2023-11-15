import { Col, Row } from 'react-bootstrap';
import CardsNavigation from './CardsNavigation';
import QuestionCard from './QuestionCard';
import React, { useState } from 'react';
import GenerateCardsNavigation from '../service/GenerateCardsNavigation';
import useWindowInnerWidth, { Breakpoints } from '../hooks/useWindowInnerWidth';

export function Cards() {
  const [navigation] = useState(GenerateCardsNavigation());

  const width = useWindowInnerWidth();

  return width > Breakpoints.XS ? (
    <Row>
      <Col sm={5}>
        <CardsNavigation {...{ navigation }} />
      </Col>
      <Col sm={6}>
        <QuestionCard {...{ prefix: '/cards' }} />
      </Col>
      <Col sm={1}></Col>
    </Row>
  ) : (
    <>
      <CardsNavigation {...{ navigation }} />
      <QuestionCard {...{ prefix: '/cards' }} />
    </>
  );
}
