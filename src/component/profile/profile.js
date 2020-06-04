import React, { Component } from "react";
import TopNavbar from "../navbar/topNavbar";

class Profile extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
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
            learn and implement new technologies and explore opportunities.
          </p>
        </header>
      </div>
    );
  }
}

export default Profile;
