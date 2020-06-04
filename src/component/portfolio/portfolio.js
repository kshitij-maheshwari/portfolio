import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class Portfolio extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand as={Link} to="/">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>

            <Nav>
              <Nav.Link as={Link} to="home" style={{ color: "#ece7e7" }}>
                Home
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/portfolio" style={{ color: "#ece7e7" }}>
                Portfolio
              </Nav.Link> */}
              <Nav.Link as={Link} to="about" style={{ color: "#ece7e7" }}>
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="contact" style={{ color: "#ece7e7" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <header className="App-header"></header>
      </div>
    );
  }
}

export default Portfolio;
