import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Registration extends Component {
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


    //create a new object from state which is then posted to JSON and the user is moved backed to the full /owned list
    createNewUser = evt => {

        evt.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email
        }
        console.log("posted to API", newUser)

        // Add the user to the "users" JSON and redirect to homepage
        this.props.postNewUser(newUser)
            .then( this.props.verifyUser(newUser.name, newUser.email))
            // .then(() => this.props.history.push("/home"))

        }

    render () {
        console.log("name", this.state.name, "email", this.state.email)
        return (
            <React.Fragment>
                <div className="welcome--container">
                    <h1> Welcome to Cave</h1>
                    <p>Get together. Get outside. Get your shit back.</p>
                </div>
                <div className="registration--container">
                    <form onSubmit={this.handleLogin}>
                        <h2 className="sign--in">Please sign in</h2>
                        <label htmlFor="inputName">
                            Name
                        </label>
                        <input onChange={this.handleFieldChange} type="name"
                            id="name"
                            placeholder="Name"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">
                            Email
                        </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email"
                            required="" />
                        <button type="submit"
                                onClick={this.createNewUser}  className="btn btn-registration--submit"
                                >
                            Register
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )

    }

}