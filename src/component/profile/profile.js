import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Profile extends Component {
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
          <Navbar.Brand href="./">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="./home" style={{ color: "#ece7e7" }}>
                Home
              </Nav.Link>
              {/* <Nav.Link href="./portfolio" style={{color:"#ece7e7"}}>Portfolio</Nav.Link> */}
              <Nav.Link href="./about" style={{ color: "#ece7e7" }}>
                Skills
              </Nav.Link>
              <Nav.Link href="./contact" style={{ color: "#ece7e7" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <header className="App-header">
          <img
            src={require("../../images/picture.JPG")}
            className="imagecover"
            alt="profilepicture"
          />
          <br />
          <p style={{ fontFamily: "monospace" }}>
            I work for{" "}
            <a
              className="companylink"
              href="https://www.infosys.com/"
              target={"_blank"}
            >
              Infosys Limited
            </a>{" "}
            and am currently posted in Jaipur, Rajasthan.
            <br />I am a Passionate Web Developer who always look forward to
            learn and implement new technologies and explore more about them.
          </p>
        </header>
      </div>
    );
  }
}

export default Profile;