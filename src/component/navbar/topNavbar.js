import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default class TopNavbar extends Component {
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
          <Navbar.Brand as={Link} to="/" style={{ padding: "0" }}>
            <img
              src={require("../../images/logo.png")}
              style={{ height: "8vh" }}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>

            <Nav>
              <Nav.Link
                as={Link}
                to="/home"
                style={{ color: "#ece7e7", fontSize: "18px" }}
              >
                Home
              </Nav.Link>
              {/* <Nav.Link to="/portfolio" style={{ color: "#ece7e7", fontSize: "18px" }}>
                Portfolio
              </Nav.Link> */}
              <Nav.Link
                as={Link}
                to="/about"
                style={{ color: "#ece7e7", fontSize: "18px" }}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                style={{ color: "#ece7e7", fontSize: "18px" }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
