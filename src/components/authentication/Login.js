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

    //how do I set/get session storage from login?
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
                        <button type="submit"
                                onClick>
                            Sign in
                        </button>
                    </form>
                    <Link className="login--nav--link" to={`/new`}>I'm new here, sign me up!</Link>
                </div>
            </React.Fragment>
        )
    }
}