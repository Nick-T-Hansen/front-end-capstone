import React, { Component } from "react";

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

    // Simplistic handler for login submit
    handleRegister = (e) => {
        e.preventDefault()

    }

    createNewUser = evt => {
        evt.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email
        }

        console.log("posted to API", newUser)

        // Add the user to the "users" JSON and redirect to homepage
        this.props.postNewUser(newUser)
            .then( (r => {
                console.log(r)
                this.props.history.push("/")
            }))
        }

    render () {
        console.log("name", this.state.name, "email", this.state.email)
        return (
            <React.Fragment>
                <div className="welcome--container">
                <div className="jumbotron">
                    <h1 className="display-4">Glad to have you join us.</h1>
                    <p className="lead">Get ready to explore.</p>
                    <hr className="my-4"></hr>

                <div className="form-group">
                    <form onSubmit={this.handleLogin}>
                        <h3 className="registration">Register A New Account</h3>
                        <label htmlFor="inputName">
                            {/* Name */}
                        </label>
                        <input className="form-control border-0" onChange={this.handleFieldChange} type="name"
                            id="name"
                            placeholder="Name"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">
                            {/* Email */}
                        </label>
                        <input className="form-control border-0" onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email"
                            required="" />
                        <button type="submit" className="btn btn-outline-secondary btn-sm"
                                onClick={this.createNewUser}
                                >
                            Register
                        </button>
                    </form>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}