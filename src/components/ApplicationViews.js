import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Homepage from "./homepage/Homepage";
import OwnList from "./ownList/OwnList"
import GearManager from "../modules/GearManager";
import GearDetails from "./ownList/GearDetails";
import AddForm from "./ownList/AddForm";
import EditForm from "./ownList/EditForm";
import Login from "../components/authentication/Login"
import Registration from "../components/authentication/Registration"
import SharedList from "./sharedList/SharedList"
import SharedGearDetails from "./sharedList/SharedGearDetails"


export default class ApplicationViews extends Component {
  state = {
    users: [],
    gearItems: [],
    gearQualities: [],
    gearClasses: [],
    sharedItems: []
  }

  componentDidMount() {
    GearManager.getSharedGearArray().then(r => {
      this.setState({
        sharedItems: r
      })
    })

    GearManager.getAllGearExpanded().then(r => {
      this.setState({
      gearItems: r
      })
    })

    GearManager.getAllGearClasses().then(r => {
      this.setState({
      gearClasses: r
      })
    })

    GearManager.getAllGearQualities().then(r => {
      this.setState({
      gearQualities: r
      })
    })

    GearManager.getAllUsers().then(r => {
      this.setState({
        users: r
      })
    })
  }


    updateComponent = () => {
      GearManager.getAllGearExpanded().then(r => {
        this.setState({
        gearItems: r
        })
      })
    }

  postNewUser = (newUser) => {
    return GearManager.postNewUser(newUser)
    .then(() => GearManager.getAllUsers()).then(r => {
      this.setState({
        users: r
      })
    })
  }

  postNewGear = (newGearItemObject) => {
    return GearManager.post(newGearItemObject)
  .then(() => GearManager.getAllGearExpanded())
  .then(r => this.setState({
      gearItems: r
      })
  )
  }

  deleteExistingGear = (id) => {
    return GearManager.deleteGearItem(id)
  .then (() => GearManager.getAllGearExpanded())
  .then(r => this.setState({
    gearItems: r
    })
    )
    .then(() => GearManager.getSharedGearArray()).then(r => {
      this.setState({
        sharedItems: r
      })
    })
  }

  updateGear = (gearId, editGearObject) => {
    return GearManager.put(gearId, editGearObject)
    .then(() => GearManager.getAllGearExpanded())
    .then(r => {
      this.setState({
        gearItems: r,
        sharedItems: r
      })
    })
    .then(() => GearManager.getSharedGearArray()).then(r => {
      this.setState({
        sharedItems: r
      })
    })
  }



  patchGear = (gearId, booleanToChange) => {
    return GearManager.patch(gearId, booleanToChange)
    .then(() => GearManager.getAllGearExpanded())
    .then (r => {
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
          return ( <Login {...props} postNewUser={this.postNewUser} users={this.state.users} updateComponent={this.updateComponent} />)
        }}
        />
        <Route
          exact path="/register" render={props => {
            return ( <Registration {...props} postNewUser={this.postNewUser} verifyUser={this.verifyUser} />)
          }}
        />

        <Route
          exact path="/home" render={props => {
            return (<Homepage {...props}  />)
          }}
        />

        <Route
          exact path="/owned" render={props => {
            return ( <OwnList {...props} gearItems={this.state.gearItems} updateComponent={this.updateComponent} updateGear={this.updateGear} />)
          }}
        />

        <Route
          path="/:gearItemId(\d+)/details" render={props => {
            return ( <GearDetails {...props} gearItems={this.state.gearItems} deleteExistingGear={this.deleteExistingGear} />)
          }}
        />

        <Route
          path="/:gearItemId(\d+)/edit" render={props => {
            return ( <EditForm {...props} gearItems={this.state.gearItems} gearQualities={this.state.gearQualities} gearClasses={this.state.gearClasses} updateGear={this.updateGear} />)
          }}
        />

        <Route
          exact path="/add" render={props => {
            return ( <AddForm {...props} gearItems={this.state.gearItems} gearQualities={this.state.gearQualities} gearClasses={this.state.gearClasses} postNewGear={this.postNewGear} />)
          }}
        />

          <Route
          exact path="/shared" render={props => {
            return ( <SharedList {...props} sharedItems={this.state.sharedItems} updateComponent={this.updateComponent} updateGear={this.updateGear} />)
          }}
        />

          <Route
          path="/:sharedItemId(\d+)/geardetails" render={props => {
            return ( <SharedGearDetails {...props} sharedItems={this.state.sharedItems} />)
          }}
        />
      </React.Fragment>
    );
  }
}

