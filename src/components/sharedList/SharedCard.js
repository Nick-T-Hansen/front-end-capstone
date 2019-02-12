import React, { Component } from "react"
import { Link } from "react-router-dom";


//each piece of gear will have its own card under the owners OWN list. These cards will allow a user to view the gear details and add it to the SHARE list.
export default class OwnCard extends Component {

    //logic to render either the buttons for the gear owner (details and remove) or buttons for another user (details and book)
    renderOwnerCard = () => {
        let usersGear = sessionStorage.getItem("userId")
        if (this.props.sharedItem.userId == usersGear) {
            return(
            <React.Fragment>
                <button type="submit" onClick={this.UnshareButtonEL}  className="btn btn-card--share">Unshare</button>
                <Link className="card--nav--link" to={`/${this.props.sharedItem.id}/geardetails`}>Details</Link>
            </React.Fragment> )}
        else {
            return(
            <React.Fragment>
                <button type="submit" onClick={this.shareButtonEL}  className="btn btn-card--share">Book It</button>
                <Link className="card--nav--link" to={`/${this.props.sharedItem.id}/geardetails`}>Details</Link>
            </React.Fragment>)}
        }

        UnshareButtonEL = () => {

            const editGearItemObject = {
                gearName: this.props.sharedItem.gearName,
                userId: Number(sessionStorage.getItem("userId")),
                gearQualityId: Number(this.props.sharedItem.gearQualityId),
                gearClassId: Number(this.props.sharedItem.gearClassId),
                notes: this.props.sharedItem.notes,
                borrowedUserId: this.props.sharedItem.borrowedUserId,
                shared: false
            }

            this.props.updateGear(this.props.sharedItem.id, editGearItemObject)
            alert(`${this.props.sharedItem.gearName} has been removed from the shared list`)
            // .then(() => this.props.history.push("/shared"))
        }
    render() {

        console.log("get shared item from JSON", this.props.sharedItem)
        return (
            <React.Fragment>
                <section key={this.props.sharedItem.id} className="card">
                    <div className="sharedItem--card">
                        <h2>{this.props.sharedItem.gearName}</h2>
                    </div>
                    <section className="card--links--container">
                        <article className="card--link--article">
                        </article>
                    <div className="button-container">
                    {this.renderOwnerCard()}
                    </div>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}