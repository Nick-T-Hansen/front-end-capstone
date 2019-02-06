import React, { Component } from "react";

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
    };

    //handler for login submit
    handleLogin = e => {
        e.preventDefault();

    //store user login in local storage (session storage)
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.name,
                password: this.state.email
            })
        );
    }

    render () {
        return (
            <React.Fragment>
                <div className="login--container">
                    <form onSubmit={this.handleLogin}>
                        <h1 className="sign--in">Please sign in</h1>
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
                        <button type="submit">
                            Sign in
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )

    }

}