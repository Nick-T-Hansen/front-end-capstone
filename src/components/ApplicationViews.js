import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Homepage from "./homepage/Homepage";
import OwnList from "./ownList/OwnList"
import GearManager from "../modules/GearManager";
import GearDetails from "./ownList/GearDetails";
import AddForm from "./ownList/AddForm";


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
    // GearManager.getGearItem().then(r => {
    //   this.setState({
    //   gearItems:r
    //   })
    // })

  }
  //POST new gear item from addForm to API
  postNewGear = (newGearItemObject) => GearManager.post(newGearItemObject)
  .then(() => GearManager.getAllGearItems())
  .then(r => this.setState({
      gearItems: r
      })
  )
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
          }}
        />

        <Route
          path="/:gearItemId(\d+)/details" render={props => {
            return ( <GearDetails {...props} gearItems={this.state.gearItems} />)
            //return the component which will show the user's tasks
          }}
        />

        <Route
          exact path="/add" render={props => {
            return ( <AddForm {...props} gearItems={this.state.gearItems} gearQualities={this.state.gearQualities} gearClasses={this.state.gearClasses} postNewGear={this.postNewGear} />)
          }}
        />
      </React.Fragment>
    );
  }
}
