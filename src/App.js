import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Home from "./component/home/home";
import Profile from "./component/profile/profile";
// import Portfolio from "./component/portfolio/portfolio";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import { ProgressSpinner } from "primereact/progressspinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loadPage: false,
    };
  }

  componentWillMount = () => {
    setTimeout(() => {
      this.setState({
        loadPage: true,
      });
    }, 3500);
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.loadPage ? (
          <div
            id="loader"
            style={{ backgroundColor: "black", height: "100vh" }}
          >
            <ProgressSpinner
              style={{
                position: " absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              strokeWidth="4"
            />
          </div>
        ) : (
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Profile} />
              {/* <Route path="/portfolio" component={Portfolio} /> */}
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="*" component={Home} />
            </Switch>
          </BrowserRouter>
        )}
      </React.Fragment>
    );
  }
}

export default App;
