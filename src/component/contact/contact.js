import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopNavbar from "../navbar/topNavbar";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  }

  render() {
    return (
      <div className="App">
        <TopNavbar />
        <header className="App-header">
          <h4>Contact Information</h4>
          <br />
          <br />
          <Container>
            <Row>
              <Col sm>
                <p>Address </p>{" "}
                <p style={{ fontSize: "18px", color: "#c5c5c5eb" }}>
                  8-L-27 Tilak Nagar, Bhilwara, Rajasthan (311001)
                </p>
              </Col>
              <Col sm>
                <p>Mobile </p>{" "}
                <p style={{ fontSize: "18px", color: "#c5c5c5eb" }}>
                  +91-9461531811
                </p>
              </Col>
              <Col sm>
                <p>E-Mail </p>{" "}
                <p style={{ fontSize: "18px", color: "#c5c5c5eb" }}>
                  kshitijgenius@yahoo.com
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <br />
                <br />
                <a
                  target={"_blank"}
                  title="Follow me on Twitter"
                  href="https://twitter.com/Kshitij1312"
                >
                  <img
                    alt="follow me on twitter"
                    src={require("../../images/twitter.png")}
                    style={{ border: "0", height: "40px", width: "50px" }}
                  />
                </a>
                &nbsp;&nbsp;
                <a
                  target={"_blank"}
                  title="Follow me on Facebook"
                  href="https://www.facebook.com/kshitijmaheshwari1312"
                >
                  <img
                    alt="follow me on facebook"
                    src={require("../../images/facebook.png")}
                    style={{ border: "0", height: "40px", width: "50px" }}
                  />
                </a>
                &nbsp;&nbsp;
                <a
                  target={"_blank"}
                  title="Follow me on Instagram"
                  href="https://www.instagram.com/kshitij_maheshwari/"
                >
                  <img
                    alt="follow me on instagram"
                    src={require("../../images/insta.png")}
                    style={{ border: "0", height: "40px", width: "50px" }}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default Contact;
