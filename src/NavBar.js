import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            Job Trackr <i className="fas fa-leaf" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/checklist" className="nav-button" onClick={closeMenu}>
                Checklist
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/add-job" className="nav-button" onClick={closeMenu}>
                Job Log
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-button" onClick={closeMenu}>
                About
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
