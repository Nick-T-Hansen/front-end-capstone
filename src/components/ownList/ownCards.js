import React, { Component } from "react"
import { Link } from "react-router-dom";

//each piece of gear will have its own card under the owners OWN list. These cards will allow a user to view the gear details and add it to the SHARE list.
export default class OwnCard extends Component {
    render() {
        console.log("get", this.props.gearItems)
        return (
            <React.Fragment>
                <section key={this.props.gearItem.id} className="card">
                    <section className="gearItem--card">
                        <h2>{this.props.gearItem.gearName}</h2>
                    </section>
                    <section className="card--links--container">
                        <article className="card--link--article">
                            <Link className="card--nav--link" to={`/${this.props.gearItem.id}/details`}>Details</Link>
                        </article>
                        <article className="card--link--article">
                            <Link className="card--nav--link" to={`/borrowed`}>Share</Link>
                        </article>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}