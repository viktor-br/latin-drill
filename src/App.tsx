import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GrammarCards } from './components/GrammarCards';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WordCards from './components/WordCards';

function App() {
  const topNavigation =
    window.location.pathname !== '/' ? '/' + window.location.pathname.split('/')[1] + '/' : '/';

  return (
    <Container fluid="lg" className="app d-flex flex-column p-1">
      <Navbar>
        <Container className="justify-content-start">
          <Navbar.Brand>
            <h1>Latin drill</h1>
          </Navbar.Brand>
          <Nav variant="underline" defaultActiveKey={topNavigation}>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/grammar/">Grammar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/words/">Words</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/grammar/*" element={<GrammarCards />} />
          {/*<Route path="/contact" element={<Contact />} />*/}
          <Route path="/words/*" element={<WordCards />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
