import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./OwnList.css"


//each piece of gear will have its own card under the owners OWN list. These cards will allow a user to view the gear details and add it to the SHARE list.
export default class OwnCard extends Component {

    shareButtonEL = () => {

            const editGearItemObject = {
                gearName: this.props.gearItem.gearName,
                userId: Number(sessionStorage.getItem("userId")),
                gearQualityId: Number(this.props.gearItem.gearQualityId),
                gearClassId: Number(this.props.gearItem.gearClassId),
                notes: this.props.gearItem.notes,
                borrowedUserId: this.props.gearItem.borrowedUserId,
                shared: true
            }

            this.props.updateGear(this.props.gearItem.id, editGearItemObject)
            alert(`${this.props.gearItem.gearName} has been shared with others`)
            // .then(() => this.props.history.push("/owned"))
        }

        UnshareButtonEL = () => {

            const editGearItemObject = {
                gearName: this.props.gearItem.gearName,
                userId: Number(sessionStorage.getItem("userId")),
                gearQualityId: Number(this.props.gearItem.gearQualityId),
                gearClassId: Number(this.props.gearItem.gearClassId),
                notes: this.props.gearItem.notes,
                borrowedUserId: "",
                shared: false
            }

            this.props.updateGear(this.props.gearItem.id, editGearItemObject)
            // .then(() => this.props.history.push("/owned"))
        }
    detailsButtonEL = () => {
        this.props.history.push(`/${this.props.gearItem.id}/details`)
    }
    render() {

        if (this.props.gearItem.shared == true) {
            return(
            <React.Fragment>
                <section key={this.props.gearItem.id} className="card card--private--shared">
                    <div className="gearItem--card">

                        <h2 className="header">{this.props.gearItem.gearName}</h2>

                    </div>
                    <div className="card-message">
                    <p>This item is currently being shared.</p>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="submit" onClick={this.UnshareButtonEL}  className="btn btn-card--share">Unshare</button>
                        <Link className="btn card--nav--link" to={`/${this.props.gearItem.id}/details`}>Details</Link>
                    </div>
                </section>
            </React.Fragment> )}
        else {
            console.log("get", this.props.gearItems)
            return (
                <React.Fragment>
                    <section key={this.props.gearItem.id} className="card">
                        <div className="gearItem--card">
                            <h2>{this.props.gearItem.gearName}</h2>
                        </div>
                        <div className="button-container">
                            <button type="submit" onClick={this.shareButtonEL}  className="btn btn-card--share">Share</button>
                            <Link className="btn card--nav--link" to={`/${this.props.gearItem.id}/details`}>Details</Link>
                        </div>
                    </section>
                </React.Fragment>
            )
        }
    }
}