import React, { Component } from "react"
import { Link } from "react-router-dom";


//each piece of gear will have its own card under the owners OWN list. These cards will allow a user to view the gear details and add it to the SHARE list.
export default class OwnCard extends Component {
    render() {
        console.log("get", this.props.sharedItems)
        return (
            <React.Fragment>
                <section key={this.props.sharedItems.id} className="card">
                    <section className="sharedItems--card">
                        <h2>{this.props.sharedItems.gearName}</h2>
                    </section>
                    <section className="card--links--container">
                        <article className="card--link--article">
                            <Link className="card--nav--link" to={`/${this.props.sharedItems.id}/details`}>Details</Link>
                            <Link className="card--nav--link" to={`/${this.props.sharedItems.id}/details`}
                                // onClick={() => this.props.deleteExistingGear(gear.id)
                                //     .then(() => this.props.history.push("/owned"))}
                            >Remove</Link>

                        </article>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}