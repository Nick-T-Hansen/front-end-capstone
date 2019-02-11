import React, { Component } from "react"
import { Link } from "react-router-dom";


//each piece of gear will have its own card under the owners OWN list. These cards will allow a user to view the gear details and add it to the SHARE list.
export default class OwnCard extends Component {

    //logic to render either the buttons for the gear owner (details and remove) or buttons for another user (details and book)
    renderOwnerCard = () => {
        let usersGear = sessionStorage.getItem("userId")
        if (this.props.sharedItem.userId == usersGear) {
            return(<React.Fragment>
            <Link className="card--nav--link" to={`/${this.props.sharedItem.id}/details`}>Details</Link>
            <Link className="card--nav--link" to={`/${this.props.sharedItem.id}/details`}>Remove</Link>
            </React.Fragment> )}
        else {
            return(<React.Fragment>
            <Link className="card--nav--link" to={`/${this.props.sharedItem.id}/details`}>Details</Link>
            <Link className="card--nav--link" to={`/${this.props.sharedItem.id}/details`}>Book It</Link>
            </React.Fragment>)}
        }

    render() {

        console.log("get shared item from JSON", this.props.sharedItem)
        return (
            <React.Fragment>
                <section key={this.props.sharedItem.id} className="card">
                    <section className="sharedItem--card">
                        <h2>{this.props.sharedItem.gearName}</h2>
                    </section>
                    <section className="card--links--container">
                        <article className="card--link--article">
                            {this.renderOwnerCard()}
                        </article>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}