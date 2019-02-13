import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import caveLogo from "./caveLogo.png"
import "./NavBar.css"


class NavBar extends Component {

    logout = () => {
        console.log("logout clicked")
        window.sessionStorage.removeItem("userId")
        document.location.href ="/"
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav nav-pills nav-fill">
                <li className="navbar-brand">
                    <img src={caveLogo} className="nav--cave-logo" alt="cave logo"></img>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owned">Owned</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shared">Shared</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/borrowed">Borrowed</Link>
                    </li>
                    <button type="submit" onClick={this.logout}  className="nav-item btn btn-nav-logout">Logout</button>
                </ul>
            </nav>
        )
    }
}

export default NavBar
