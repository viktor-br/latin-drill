import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CardsNavigationElement from './CardsNavigationElement';
import { NavigationElement } from '../types/NavigationElement';

interface NavigationProps {
  readonly navigation: NavigationElement[];
}

export default function CardsNavigation(props: NavigationProps) {
  const { navigation } = props;

  return (
    <Container className="cards-navigation p-0 flex-grow-1">
      <Navbar>
        <Nav className="flex-column">
          {navigation.map((navigationElement) => (
            <CardsNavigationElement
              {...{ navigationElement, parentPath: '/cards/', level: 0 }}
              key={'/cards/' + navigationElement.name}
            />
          ))}
        </Nav>
      </Navbar>
    </Container>
  );
}
