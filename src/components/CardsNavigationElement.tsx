import React, { useState } from 'react';
import { Container, Nav, NavItem } from 'react-bootstrap';
import { CardsNavigationElementProps } from '../types/CardsNavigationElementProps';
import { useLocation } from 'react-router-dom';

export default function CardsNavigationElement(props: CardsNavigationElementProps) {
  const { navigationElement, parentPath, level } = props;
  const { label, name, subElements } = navigationElement;
  const path = parentPath + name + '/';
  const location = useLocation();
  const [expanded, setExpanded] = useState(location.pathname.startsWith(path));
  const cls: string = expanded ? 'flex-column' : 'flex-column d-none';

  return (
    <NavItem className={level === 0 ? '' : 'cards-navigation-item'}>
      <Container className="d-flex flex-row align-items-center">
        {subElements.length > 0 && (
          <span className="cards-navigation-folder" onClick={() => setExpanded(!expanded)}>
            <i className={'bi bi-file-'.concat(expanded ? 'minus' : 'plus')}></i>
          </span>
        )}
        <Nav.Link href={path} as="a" active={location.pathname.startsWith(path)}>
          {label}
        </Nav.Link>
      </Container>
      {subElements.length > 0 && (
        <Nav className={cls}>
          {subElements.map((navigationSubElement) => (
            <CardsNavigationElement
              {...{ navigationElement: navigationSubElement, parentPath: path, level: level + 1 }}
              key={path + '/' + navigationSubElement.name}
            />
          ))}
        </Nav>
      )}
    </NavItem>
  );
}
