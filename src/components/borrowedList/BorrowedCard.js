import React, { Component } from "react"
import { Link } from "react-router-dom";

//individual cards which are looped and created for the shared list. Depending on the userId, a different button set is created with each card.
export default class BorrowedCard extends Component {

    //logic to render either the buttons for the gear owner (details and remove) or buttons for another user (details and book)
    renderOwnerCard = () => {
        let usersGear = sessionStorage.getItem("userId")
        if (this.props.sharedItem.userId == usersGear) {
            return(
            <React.Fragment>
                <button type="submit" onClick={this.UnshareButtonEL}  className="btn btn-card--share">Unshare</button>
                <Link className="btn card--nav--link" to={`/${this.props.sharedItem.id}/geardetails`}>Details</Link>
            </React.Fragment> )}
        else {
            return(
            <React.Fragment>
                <button type="submit" onClick={this.shareButtonEL}  className="btn btn-card--borrowed">Return It</button>
                <Link className="btn card--nav--link" to={`/${this.props.sharedItem.id}/geardetails`}>Details</Link>
            </React.Fragment>)}
        }

        //edits the gearItem borrowedUserId and removes it from the shared list when the "Return It" button is clicked
        returnButtonEL = () => {

            const editGearItemObject = {
                gearName: this.props.sharedItem.gearName,
                userId: Number(sessionStorage.getItem("userId")),
                gearQualityId: Number(this.props.sharedItem.gearQualityId),
                gearClassId: Number(this.props.sharedItem.gearClassId),
                notes: this.props.sharedItem.notes,
                borrowedUserId: "",
                shared: this.props.sharedItem.shared
            }

            this.props.updateGear(this.props.sharedItem.id, editGearItemObject)
            alert(`${this.props.sharedItem.gearName} has been removed from the shared list`)
        }

    render() {

        console.log("get shared item from JSON", this.props.sharedItem)
        return (
            <React.Fragment>
                <section key={this.props.sharedItem.id} className="card">
                    <div className="sharedItem--card">
                        <h2>{this.props.sharedItem.gearName}</h2>
                    </div>

                    <div className="card-message">
                        <p>This item is owned by .</p>
                    </div>
                    <div className="button-container">
                        <button type="submit" onClick={this.returnButtonEL}  className="btn btn-card--borrowed">Return It</button>
                        <Link className="btn card--nav--link" to={`/${this.props.sharedItem.id}/geardetails`}>Details</Link>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}