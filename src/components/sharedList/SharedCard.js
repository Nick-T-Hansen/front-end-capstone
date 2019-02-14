import React, { Component } from "react"
import { Link } from "react-router-dom";

//individual cards which are looped and created for the shared list. Depending on the userId, a different button set is created with each card.
export default class OwnCard extends Component {

    //logic to render either the buttons for the gear owner (details and remove) or buttons for another user (details and book)
    renderOwnerCard = () => {
        let usersGear = sessionStorage.getItem("userId")
        if (this.props.sharedItem.borrowedUserId !== "") {
            return (
                <React.Fragment>
                <div className="card-message">
                <p> Item is currently being borrowed.</p>
                </div>
            </React.Fragment>
            )}
        else if (this.props.sharedItem.userId == usersGear) {
        return(
        <React.Fragment>
            <button type="submit" onClick={this.UnshareButtonEL}  className="btn btn-card--share">Unshare</button>
            <Link className="btn card--nav--link" to={`/${this.props.sharedItem.id}/geardetails`}>Details</Link>
        </React.Fragment> )}
        else {
            return(
            <React.Fragment>
                <button type="submit" onClick={this.bookGearEL}  className="btn btn-card--share">Book It</button>
                <Link className="btn card--nav--link" to={`/${this.props.sharedItem.id}/geardetails`}>Details</Link>
            </React.Fragment>)}

        }

        //edits the gearItem boolean based on id and removes it from the shared list when the "unshare" button is clicked
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
        }

        //edits the gearItem based on the borrowedUserId
        bookGearEL = () => {

            const editGearItemObject = {
                gearName: this.props.sharedItem.gearName,
                userId: this.props.sharedItem.userId,
                gearQualityId: Number(this.props.sharedItem.gearQualityId),
                gearClassId: Number(this.props.sharedItem.gearClassId),
                notes: this.props.sharedItem.notes,
                borrowedUserId: Number(sessionStorage.getItem("userId")),
                shared: this.props.sharedItem.shared
            }

            this.props.updateGear(this.props.sharedItem.id, editGearItemObject)
            alert(`${this.props.sharedItem.gearName} has been booked`)

        }
    render() {

        // console.log("get shared item from JSON", this.props.sharedItem)
        return (
            <React.Fragment>
                <section key={this.props.sharedItem.id} className="card">
                    <div className="sharedItem--card">
                    <h2 className="card-header">{this.props.sharedItem.gearName}</h2>
                    </div>
                    <section className="card--links--container">
                        <article className="card--link--article">
                        </article>
                    <div className="small-button-container">
                    {this.renderOwnerCard()}
                    </div>
                    </section>
                </section>
            </React.Fragment>
        )
    }
}