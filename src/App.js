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

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
