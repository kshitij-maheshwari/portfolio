import React, { Component } from "react";
import TopNavbar from "../navbar/topNavbar";

class Profile extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar />
        <header className="App-header">
          <img src={require("../../images/picture.JPG")} className="imagecover" alt="profilepicture" />
          <br />
          <p style={{ fontFamily: "monospace" }}>
            I am presently working in{" "}
            <a className="companylink" href="https://www.jio.com/" target={"_blank"}>
              Reliance Jio
            </a>
            {", "}
            Mumbai(Maharashtra) as Assistant Manager.
            <br />I am a Passionate Web Developer who always look forward to learn and implement new technologies and explore opportunities.
          </p>
        </header>
      </div>
    );
  }
}

export default Profile;
