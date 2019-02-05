import React, { Component } from "react"
import { Link } from "react-router-dom";

export default class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="homepage--container">
                    <article className="home--link--container">
                        <Link className="home--nav--link" to={`/owned`}>Owned</Link>
                    </article>
                        <article className="home--link--container">
                    <Link className="home--nav--link" to={`/shared`}>Shared</Link>
                    </article>
                        <article className="home--link--container">
                    <Link className="home--nav--link" to={`/borrowed`}>Borrowed</Link>
                    </article>
                </div>
            </React.Fragment>
        )
    }
}
