import React, { Component } from "react"
import { Link } from "react-router-dom";

//individual cards which are looped and created for the shared list. Depending on the userId, a different button set is created with each card.
export default class BorrowedCard extends Component {

        //edits the gearItem borrowedUserId and removes it from the shared list when the "Return It" button is clicked
        returnButtonEL = () => {

            const editGearItemObject = {
                gearName: this.props.borrowedItem.gearName,
                userId: this.props.borrowedItem.userId,
                gearQualityId: Number(this.props.borrowedItem.gearQualityId),
                gearClassId: Number(this.props.borrowedItem.gearClassId),
                notes: this.props.borrowedItem.notes,
                borrowedUserId: "",
                shared: this.props.borrowedItem.shared
            }
            this.props.updateBookedGear(this.props.borrowedItem.id, editGearItemObject)
        }

    render() {
        return (
            <React.Fragment>
                <section key={this.props.borrowedItem.userId} className="card">
                    <div className="borrowedItem--card">
                    <h2 className="card-header">{this.props.borrowedItem.gearName}</h2>
                    </div>

                    <div className="card-message-borrowed">
                        <p>Owned by: {this.props.borrowedItem.user.name}</p>
                    </div>
                    <div className="small-button-container">
                        <button type="submit" onClick={this.returnButtonEL}  className="btn btn-card--borrowed">Return It</button>
                        <Link className="btn card--nav--link" to={`/${this.props.borrowedItem.id}/geardetails`}>Details</Link>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
