import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function WordsNavigation() {
  const location = useLocation();

  return (
    <Container className="cards-navigation p-0 flex-grow-1">
      <Navbar>
        <Nav className="flex-column">
          <NavItem>
            <Container className="d-flex flex-row align-items-center">
              <Nav.Link to="/words/eng" as={Link} active={location.pathname === '/words/eng'}>
                Englist {'->'} Latin
              </Nav.Link>
            </Container>
            <Nav className="flex-column">
              <NavItem className={'cards-navigation-item'}>
                <Container className="d-flex flex-row align-items-center">
                  <Nav.Link
                    to="/words/eng/nouns"
                    as={Link}
                    active={location.pathname.startsWith('/words/eng/nouns')}>
                    Nouns
                  </Nav.Link>
                </Container>
              </NavItem>
              <NavItem className={'cards-navigation-item'}>
                <Container className="d-flex flex-row align-items-center">
                  <Nav.Link
                    to="/words/eng/verbs"
                    as={Link}
                    active={location.pathname.startsWith('/words/eng/verbs')}>
                    Verbs
                  </Nav.Link>
                </Container>
              </NavItem>
            </Nav>
          </NavItem>
          <NavItem>
            <Container className="d-flex flex-row align-items-center">
              <Nav.Link to="/words/lat" as={Link} active={location.pathname === '/words/lat'}>
                Latin {'->'} English
              </Nav.Link>
            </Container>
            <Nav className="flex-column">
              <NavItem className={'cards-navigation-item'}>
                <Container className="d-flex flex-row align-items-center">
                  <Nav.Link
                    to="/words/lat/nouns"
                    as={Link}
                    active={location.pathname.startsWith('/words/lat/nouns')}>
                    Nouns
                  </Nav.Link>
                </Container>
              </NavItem>
              <NavItem className={'cards-navigation-item'}>
                <Container className="d-flex flex-row align-items-center">
                  <Nav.Link
                    to="/words/lat/verbs"
                    as={Link}
                    active={location.pathname.startsWith('/words/lat/verbs')}>
                    Verbs
                  </Nav.Link>
                </Container>
              </NavItem>
            </Nav>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
}
