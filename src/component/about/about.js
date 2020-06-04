import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Chart } from "primereact/chart";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    const multiAxisData = {
      labels: [
        "React JS",
        "Express JS",
        "Node JS",
        "Redux",
        "HTML",
        "CSS",
        "Mongo DB",
        "Spring Framework",
      ],
      datasets: [
        {
          label: "Technologies Known",
          backgroundColor: [
            "#EC407A",
            "#14A25A",
            "#42A5F5",
            "#7E57C2",
            "#66BB6A",
            "#ef11b5",
            "#FFCA28",
            "#26A69A",
            "#AB47BC",
            "#fb9803",
          ],
          yAxisID: "y-axis-1",
          data: [85, 70, 80, 60, 80, 75, 65, 75],
        },
      ],
    };

    const multiAxisOptions = {
      responsive: true,
      tooltips: {
        mode: "index",
        intersect: true,
      },
      scales: {
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
            ticks: {
              min: 0,
              max: 100,
            },
          },
          {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              min: 0,
              max: 100,
            },
          },
        ],
      },
    };
    return (
      <div className="App">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand to="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/home" style={{ color: "#ece7e7" }}>
                Home
              </Nav.Link>
              {/* <Nav.Link
                href="http://localhost:3000/portfolio"
                style={{ color: "#ece7e7" }}
              >
                Portfolio
              </Nav.Link> */}
              <Nav.Link as={Link} to="/about" style={{ color: "#ece7e7" }}>
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: "#ece7e7" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <br />
        <br />
        <Chart
          type="bar"
          data={multiAxisData}
          options={multiAxisOptions}
          style={{ width: "95%", marginLeft: "2.5%" }}
        />
      </div>
    );
  }
}

export default About;
