import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./OwnList.css"


//each piece of gear will have its own card under the owners OWN list. These cards will allow a user to view the gear details and add it to the SHARE list.
export default class OwnCard extends Component {

    shareButtonEL = () => {
        console.log("share click")
    //     let updateGear = this.props.gearItem;
    //     updateGear.shared = true
    //     console.log("this item is now true", this.props.gearItem)
    }

    detailsButtonEL = () => {
        console.log("details click")
        this.props.history.push(`/${this.props.gearItem.id}/details`)
    }
    render() {
        console.log("get", this.props.gearItems)
        return (
            <React.Fragment>
                <section key={this.props.gearItem.id} className="card">
                    <div className="gearItem--card">
                        <h2>{this.props.gearItem.gearName}</h2>
                    </div>
                    <div className="button-container">
                        <button type="submit" onClick={this.shareButtonEL}  className="btn btn-card--share">Share</button>
                        <Link className="card--nav--link" to={`/${this.props.gearItem.id}/details`}>Details</Link>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}