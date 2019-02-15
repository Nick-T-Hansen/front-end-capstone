import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {

    static navigationOptions = {
        header: null,
        title: 'Login',
        };

    // set state
    state = {
        name: "",
        email: ""
    }

    // fn to update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    //handler for login submit
    handleLogin = e => {
        e.preventDefault();

        sessionStorage.setItem(
            "name",
            this.state.name
        )

        //compare the possible user trying to login to the array of users who have registered and are stored in the users API. If the user passes the authentication, the userId is set and used to render all pages.
        let possibleUser = sessionStorage.getItem("name")
        let authenticated = this.props.users.find(user => user.name === possibleUser)
                //add email as well here

        console.log("authenticated", authenticated)


        if (authenticated === undefined){
            alert("Grump Cat says 'Nope!' Try again or create an account")
        }

        else {
        sessionStorage.setItem("userId",authenticated.id)
        let currentUser = sessionStorage.getItem("userId")
        let logedIn = Number(currentUser)
        console.log(logedIn)
        this.props.updateComponent()
        this.props.history.push("/owned")
        }
}

    render () {
        return (
            <React.Fragment>
            <div className="login-container">
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Cave</h1>
                    <p className="lead">Get Together. Get Outside. Get Your Shit Back.</p>
                    <hr className="my-4"></hr>

                <div className="form-group">
                    <form onSubmit={this.handleLogin}>
                        {/* <h3 className="registration">Enter Cave</h3> */}
                        <label htmlFor="inputName">
                            {/* Name */}
                        </label>
                        <input className="form-control border-0" onChange={this.handleFieldChange} type="name"
                            id="name"
                            placeholder="Name"
                            required="" autoFocus="" />
                        <label htmlFor="email">
                            {/* Email */}
                        </label>
                        <br></br>
                        <input className="form-control border-0" onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email"
                            required="" />
                        <button className="btn btn-outline-secondary btn-sm" type="submit"
                                onClick = {this.handleLogin}
                                >Sign in
                        </button>
                    <Link className= "nav-link" to={`/register`}>I'm new here, sign me up!</Link>
                    </form>
                </div>
            </div>
                                </div>
            </React.Fragment>
        )
    }
}