import React, { Component } from "react"
import { Link } from "react-router-dom";

export default class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className=" row homepage--container">
                    <div className="home--link--container col-sm-4">
                        <Link className="home--nav--link" to={`/owned`}>Owned</Link>
                    </div>
                        <div className="home--link--container" class="col-sm-4">
                    <Link className="home--nav--link" to={`/shared`}>Shared</Link>
                    </div>
                        <div className="home--link--container" class="col-sm-4">
                    <Link className="home--nav--link" to={`/borrowed`}>Borrowed</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
