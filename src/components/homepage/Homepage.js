import React, { Component } from "react"
import { Link } from "react-router-dom";

export default class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className=" row homepage--container">
                </div>
                <h1> Welcome back, {sessionStorage.getItem("name")}</h1>
                <div className="row">
                    <div className="col">.col</div>
                    <div className="col">.col
                        <Link className="home--nav--link" to={`/owned`}>Owned</Link>
                    </div>
                    <div className="col">.col</div>
                </div>
                <div className="row">
                    <div className="col">.col</div>
                    <div className="col">.col
                        <Link className="home--nav--link" to={`/shared`}>Shared</Link>
                    </div>
                    <div className="col">.col</div>
                </div>
                <div className="row">
                    <div className="col">.col</div>
                    <div className="col">.col
                        <Link className="home--nav--link" to={`/borrowed`}>Borrowed</Link>
                        </div>
                    <div className="col">.col</div>
                </div>
            </React.Fragment>
        )
    }
}
