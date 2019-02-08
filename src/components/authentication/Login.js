import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {

    // set state
    state = {
        name: "",
        email: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    //handler for login submit
    handleLogin = e => {
        e.preventDefault();

        //  setting username in session storage.
        sessionStorage.setItem(
            "name",
            this.state.name
        )

        //compare the possible user trying to login to the array of users who have registered and are stored in the users API. If the user passes the authentication, the userId is set and used to render all pages.
        let possibleUser = sessionStorage.getItem("name")
        let authenticated = this.props.users.find(user => user.name === possibleUser)

        console.log("props", this.props)
        console.log("authenticated", authenticated)
        console.log("session storage", sessionStorage)

        if (authenticated === undefined){
            alert("Grump Cat says 'Nope!' Try again or create an account")
        }

        else {
        sessionStorage.setItem("userId",authenticated.id)
        // this.props.updateComponent()
        this.props.history.push("/home")
        }
}

    render () {
        return (
            <React.Fragment>
                <div className="welcome--container">
                    <h1> Welcome to Cave</h1>
                    <p>Get together. Get outside. Get your shit back.</p>
                </div>
                <div className="login--container">
                    <form onSubmit={this.handleLogin}>
                        <h2 className="sign--in">Please sign in</h2>
                        <label htmlFor="inputName">
                            Name
                        </label>
                        <input onChange={this.handleFieldChange} type="name"
                            id="name"
                            placeholder="Name"
                            required="" autoFocus="" />
                        <label htmlFor="email">
                            Email
                        </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email"
                            required="" />
                        <button type="btn submit"
                                onClick = {this.handleLogin}
                            >Sign in
                        </button>
                    </form>
                    <Link className="login--nav--link" to={`/register`}>I'm new here, sign me up!</Link>
                </div>
            </React.Fragment>
        )
    }
}