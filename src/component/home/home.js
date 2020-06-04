import React, { Component } from "react";
import { Button } from "primereact/button";
import { Redirect } from "react-router-dom";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      pro: false,
    };
  }
  profile = () => {
    this.setState({ pro: true });
  };
  render() {
    if (this.state.pro === true) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={require("../../images/logo.png")}
            style={{ height: "14vh" }}
            alt="logo"
          />
          <br />

          <h2>Hello, Warm Greetings from</h2>
          <h2>
            <a
              href="http://www.linkedin.com/in/kshitijmaheshwari"
              className="linkedinlink"
              target={"_blank"}
            >
              Kshitij Maheshwari
            </a>
          </h2>

          <h2>
            A Full Stack Web Developer...
            <span className="blinking-cursor">|</span>
          </h2>
          <br />
          <h2>
            <Button
              label="View Profile"
              onClick={this.profile}
              className="p-button-rounded p-button-secondary mainbutton"
              icon="pi pi-arrow-right"
              iconPos="right"
            />
          </h2>
        </header>
      </div>
    );
  }
}

export default Home;
