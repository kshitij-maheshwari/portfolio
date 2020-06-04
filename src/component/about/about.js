import React, { Component } from "react";
import { Chart } from "primereact/chart";
import {
  multiAxisData,
  multiAxisOptionsDesktop,
  multiAxisOptionsMobile,
} from "./skillsData";
import TopNavbar from "../navbar/topNavbar";

class About extends Component {
  render() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
      <div className="App">
        <TopNavbar />

        <br />
        <br />
        <br />
        <Chart
          type={isMobile ? "horizontalBar" : "bar"}
          data={multiAxisData}
          options={isMobile ? multiAxisOptionsMobile : multiAxisOptionsDesktop}
          style={
            isMobile ? { width: "94%" } : { width: "85%", marginLeft: "7%" }
          }
          height={isMobile ? "495px" : "140px"}
        />
      </div>
    );
  }
}

export default About;
