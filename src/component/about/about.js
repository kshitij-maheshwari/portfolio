import React, { Component } from "react";
import { Chart } from "primereact/chart";
import { multiAxisData, multiAxisOptionsDesktop, multiAxisOptionsMobile } from "./skillsData";
import TopNavbar from "../navbar/topNavbar";

class About extends Component {
  render() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
      <div className="App">
        <TopNavbar />

        <Chart
          type={isMobile ? "horizontalBar" : "bar"}
          data={multiAxisData}
          options={isMobile ? multiAxisOptionsMobile : multiAxisOptionsDesktop}
          // style={isMobile ? { width: "94%" } : { width: "85%", marginLeft: "7%" }}
          className="chartDiv"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1em",
            position: "absolute",
            top: "10vh",
            width: "100vw",
          }}
          height={isMobile ? "500px" : "90vh"}
        />
      </div>
    );
  }
}

export default About;
