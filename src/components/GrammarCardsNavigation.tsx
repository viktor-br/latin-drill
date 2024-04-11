import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import GrammarCardsNavigationElement from './GrammarCardsNavigationElement';
import { NavigationElement } from '../types/NavigationElement';

interface GrammarCardsNavigationProps {
  readonly navigation: NavigationElement[];
}

export default function GrammarCardsNavigation(props: GrammarCardsNavigationProps) {
  const { navigation } = props;

  return (
    <Container className="cards-navigation p-0 flex-grow-1">
      <Navbar>
        <Nav className="flex-column">
          {navigation.map((navigationElement) => (
            <GrammarCardsNavigationElement
              {...{ navigationElement, parentPath: '/grammar/', level: 0 }}
              key={'/grammar/' + navigationElement.name}
            />
          ))}
        </Nav>
      </Navbar>
    </Container>
  );
}
