import React, { Component } from "react";
import { Button } from "primereact/button";
import { Redirect } from "react-router-dom";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: false,
      moveLogo: false,
    };
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
  profile = () => {
    if (this.isMobile) {
      this.setState({ pro: true });
    } else {
      this.setState({ moveLogo: true });
      setTimeout(() => {
        this.setState({ pro: true });
      }, 2000);
    }
  };
  render() {
    if (this.state.pro === true) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={require("../../images/logo.png")}
            style={{ height: "14vh" }}
            alt="logo"
            className={this.state.moveLogo && !this.isMobile ? "moveLogoDesktop" : ""}
          />
          <br />

          <h2>Hello, Warm Greetings from</h2>
          <h2>
            <a href="https://www.linkedin.com/in/kshitijmaheshwari" className="linkedinlink" target={"_blank"} title="LinkedIn Page">
              &lt;Kshitij Maheshwari /&gt;
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
          {/* <h6>Visitor Count : {this.props.visitorCount}</h6> */}
        </div>
      </div>
    );
  }
}

export default Home;
