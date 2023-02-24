import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function NavBar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <button to="/" className="navbar-logo" onClick={closeMenu}>
            Job Trackr <i className="fas fa-leaf" />
          </button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <button className="nav-button" onClick={closeMenu}>
                Checklist
              </button>
            </Nav.Item>
            <Nav.Item>
              <button className="nav-button" onClick={closeMenu}>
                Job Tracker
              </button>
            </Nav.Item>
            <Nav.Item>
              <button className="nav-button" onClick={closeMenu}>
                About
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
