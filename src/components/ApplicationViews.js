import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Homepage from "./homepage/Homepage";
import OwnList from "./ownList/OwnList"
import GearManager from "../modules/GearManager";
import GearDetails from "./ownList/GearDetails";
import AddForm from "./ownList/AddForm";
import EditForm from "./ownList/EditForm";
// import Login from "../components/authentication/Login"
import Registration from "../components/authentication/Registration"


export default class ApplicationViews extends Component {
  state = {
    users: [],
    gearItems: [],
    gearQualities: [],
    gearClasses: []
  }

  componentDidMount() {

    // GearManager.getAllGearItems().then(r => {
    //   this.setState({
    //   gearItems: r
    //   })
    // })

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

    GearManager.getAllGearItemsAndQualities().then(r => {
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

  // credential check in session storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  //POST new gear item from addForm to API
  postNewGear = (newGearItemObject) =>{
    return GearManager.post(newGearItemObject)
  .then(() => GearManager.getAllGearItemsAndQualities())
  .then(r => this.setState({
      gearItems: r
      })
    )
  }

  //from the rigistration form, POST a new user to the API
  postNewUser = (newUser) =>{
    return GearManager.postNewUser(newUser)
  // .then(() => GearManager.getAllGearItemsAndQualities())
  .then(r => this.setState({
      users: r
      })
    )
  }

  verifyUser = (registrationUserName, registrationEmail) =>{
    return GearManager.getUserDataForLogin(registrationUserName, registrationEmail)
      .then (usersPassed => {
        usersPassed.forEach(userPassed => {
          let loggedIn = false;
          sessionStorage.setItem("User", userPassed.id);

          let sessionUser = sessionStorage.getItem("User");
          console.log(sessionUser);

          if(registrationUserName === userPassed.name && registrationEmail === userPassed.email) {
            loggedIn = true;
          }
          if(loggedIn === true) {
            this.props.history.push("/home")
          }
        })
      })
  }

  deleteExistingGear = (id) =>{
    return GearManager.deleteGearItem(id)
  .then (() => GearManager.getAllGearItemsAndQualities())
  .then(r => this.setState({
    gearItems: r
    })
    )
  }

  updateGear = (gearId, editGearObject) => {
    return GearManager.put(gearId, editGearObject)
    .then(() => GearManager.getAllGearItemsAndQualities())
    .then(r => {
      this.setState({
        gearItems: r
      })
    });
  }

  render() {
    return (
      <React.Fragment>

        {/* <Route path="/login" component={Login} /> */}

        <Route
          exact path="/new" render={props => {
            return ( <Registration {...props} postNewUser={this.postNewUser} verifyUser={this.verifyUser} />)
          }}
        />

        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
          return <Homepage locations={this.state.locations} />
          } else {
              return <Redirect to="/login" />
          }
        }} />

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
      </React.Fragment>
    );
  }
}
