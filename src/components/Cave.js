import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar"

import "./Cave.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Cave extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Cave;
