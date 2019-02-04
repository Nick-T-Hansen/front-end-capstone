import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Homepage from "./homepage/Homepage";


export default class ApplicationViews extends Component {
  state = {
    users: [],
    gearCards: [],
    gearQualities: [],
    gearClasses: []
  }

  componentDidMount() {


  }

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/homepage" render={props => {
            return (<Homepage {...props} />)
          }}
        />

        <Route
          path="/own" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
