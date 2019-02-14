import React, { Component } from "react"
import { Link } from "react-router-dom";
import caveLogoLarge from "./caveLogoLarge.png"
import "../ownList/OwnList.css"
export default class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row homepage--container">
                    <header className="page-header">
                        <h1> Welcome back, {sessionStorage.getItem("name")}</h1>
                    </header>
                    <div className="row">
                        <div className="col home-image">
                        <img src={caveLogoLarge} className="nav--cave-logo" alt="cave logo"></img>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
