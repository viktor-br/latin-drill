import React, { useEffect, useState } from 'react';
import { Container, Nav, NavItem } from 'react-bootstrap';
import { CardsNavigationElementProps } from '../types/CardsNavigationElementProps';
import { Link, useLocation } from 'react-router-dom';

export default function CardsNavigationElement(props: CardsNavigationElementProps) {
  const { navigationElement, parentPath, level } = props;
  const { label, name, subElements } = navigationElement;
  const path = parentPath + name + '/';
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const cls: string = expanded ? 'flex-column' : 'flex-column d-none';

  useEffect(() => {
    setExpanded(location.pathname.startsWith(path));
  }, [path, location.pathname]);

  return (
    <NavItem className={level === 0 ? '' : 'cards-navigation-item'}>
      <Container className="d-flex flex-row align-items-center">
        {subElements.length > 0 && (
          <span className="cards-navigation-folder" onClick={() => setExpanded(!expanded)}>
            <i className={'bi bi-file-'.concat(expanded ? 'minus' : 'plus')}></i>
          </span>
        )}
        <Nav.Link to={path} as={Link} active={location.pathname.startsWith(path)}>
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
