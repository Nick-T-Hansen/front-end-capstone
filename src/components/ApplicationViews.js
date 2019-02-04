import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Homepage from "./homepage/Homepage";
import OwnList from "./ownList/OwnList"
import GearManager from "../modules/GearManager";


export default class ApplicationViews extends Component {
  state = {
    users: [],
    gearItems: [],
    gearQualities: [],
    gearClasses: []
  }

  componentDidMount() {

    GearManager.getAllGearItems().then(r => {
      this.setState({
      gearItems: r
      })
    })

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
          exact path="/home" render={props => {
            return (<Homepage {...props} />)
          }}
        />

        <Route
          exact path="/owned" render={props => {
            return ( <OwnList {...props} gearItems={this.state.gearItems} />)
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
