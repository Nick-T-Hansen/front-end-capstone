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
// import NavBar from "./nav/NavBar"
import BorrowedList from "./borrowedList/BorowedList"


export default class ApplicationViews extends Component {
  state = {
    users: [],
    gearItems: [],
    gearQualities: [],
    gearClasses: [],
    sharedItems: [],
    borrowedItems: []
  }

  componentDidMount() {
    GearManager.getSharedGearArray()
    .then(r => {
      this.setState({
        sharedItems: r
      })
    })

    GearManager.getAllGearExpanded()
    .then(r => {
      this.setState({
      gearItems: r
      })
    })

    GearManager.getBookedGear().then(r => {
      console.log("get booked gear", r)
      this.setState({
      borrowedItems: r
      })
    })

    GearManager.getAllGearClasses()
    .then(r => {
      this.setState({
      gearClasses: r
      })
    })

    GearManager.getAllGearQualities()
    .then(r => {
      this.setState({
      gearQualities: r
      })
    })

    GearManager.getAllUsers()
    .then(r => {
      this.setState({
        users: r
      })
    })
  }

    updateComponent = () => {
      GearManager.getAllGearExpanded()
      .then(r => {
        this.setState({
        gearItems: r
        })
      })
    }

  postNewUser = (newUser) => {
    return GearManager.postNewUser(newUser)
    .then(() => GearManager.getAllUsers())
    .then(r => {
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
  )}

  deleteExistingGear = (id) => {
    return GearManager.deleteGearItem(id)
  .then (() => GearManager.getAllGearExpanded())
  .then(r => this.setState({
    gearItems: r
    })
    )
    .then(() => GearManager.getSharedGearArray())
    .then(r => {
      this.setState({
        sharedItems: r
      })
    })
  }
//update gear for shared list
  updateGear = (gearId, editGearObject) => {
    return GearManager.put(gearId, editGearObject)
    .then(() => GearManager.getAllGearExpanded())
    .then(r => {
      this.setState({
        gearItems: r,
        // sharedItems: r,
      })
    })
    .then(() => GearManager.getSharedGearArray())
    .then(r => {
      this.setState({
        sharedItems: r,
        // gearItems: r
      })
    })
    .then(() => GearManager.getBookedGear())
    .then(r => {
      console.log("update booked gear", r)
      this.setState({
        borrowedItems: r,

      })
    })
  }
//update gear for borrowed list (not updating auto, need to refresh)--------------------------TO DO-------------
  updateBookedGear = (gearId, editGearObject) => {
    return GearManager.put(gearId, editGearObject)
    .then(() => GearManager.getBookedGear())
    .then(r => {
      console.log("update booked gear", r)
      this.setState({
        borrowedItems: r,
        gearItems: r
      })
    })
    //necessary to refresh the shared list after removed from a users borrowed list. page does not update without this.
    .then(() => GearManager.getSharedGearArray()).then(r => {
      this.setState({
        sharedItems: r
      })
    })
  }
  //patch to update just the boolean value in a gear object
  patchGear = (gearId, booleanToChange) => {
    return GearManager.patch(gearId, booleanToChange)
    .then(() => GearManager.getAllGearExpanded())
    .then (r => {
      this.setState({
        gearItems: r
      })
    })
  }

  // authentication for user navigation
  isAuthenticated = () => sessionStorage.getItem("name") !== null

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

        {/* <Route
          path="/home" render={props => {
            if (this.isAuthenticated()) {
            return (<Homepage {...props}  />)
          } else {
            alert(" Please log in to continue")
            return <Redirect to="/" />
            }
          }}
        /> */}

        <Route
          exact path="/owned" render={props => {
            if (this.isAuthenticated()) {
            return ( <OwnList {...props} gearItems={this.state.gearItems} updateComponent={this.updateComponent} updateGear={this.updateGear} />)
            } else {
              alert("Please log in to continue")
              return <Redirect to="/" />
            }
          }}
        />

        <Route
          path="/:gearItemId(\d+)/details" render={props => {
            if (this.isAuthenticated()) {
            return ( <GearDetails {...props} gearItems={this.state.gearItems} deleteExistingGear={this.deleteExistingGear} />)
            } else {
                alert("Please log in to continue")
                return <Redirect to="/" />
              }
            }}
          />

        <Route
          path="/:gearItemId(\d+)/edit" render={props => {
            if (this.isAuthenticated()) {
            return ( <EditForm {...props} gearItems={this.state.gearItems} gearQualities={this.state.gearQualities} gearClasses=      {this.state.gearClasses} updateGear={this.updateGear} />)
            } else {
              alert("Please log in to continue")
              return <Redirect to="/" />
            }
          }}
        />

        <Route
          exact path="/add" render={props => {
            if (this.isAuthenticated()) {
            return ( <AddForm {...props} gearItems={this.state.gearItems} gearQualities={this.state.gearQualities} gearClasses={this.state.gearClasses} postNewGear={this.postNewGear} />)
            } else {
              alert("Please log in to continue")
              return <Redirect to="/" />
            }
          }}
        />

          <Route
          exact path="/shared" render={props => {
            if (this.isAuthenticated()) {
            return ( <SharedList {...props} sharedItems={this.state.sharedItems} updateGear={this.updateGear} />)
            } else {
              alert("Please log in to continue")
              return <Redirect to="/" />
            }
          }}
        />

          <Route
          path="/:sharedItemId(\d+)/geardetails" render={props => {
            if (this.isAuthenticated()) {
            return ( <SharedGearDetails {...props} sharedItems={this.state.sharedItems} />)
            } else {
                alert("Please log in to continue")
            return <Redirect to="/" />
            }
          }}
        />

          <Route
          path="/borrowed" render={props => {
            if (this.isAuthenticated()) {
            return ( <BorrowedList {...props} borrowedItems={this.state.borrowedItems} updateComponent={this.updateComponent} updateBookedGear={this.updateBookedGear} />)
            } else {
              alert("Please log in to continue")
              return <Redirect to="/" />
            }
          }}
        />
      </React.Fragment>
    );
  }
}

