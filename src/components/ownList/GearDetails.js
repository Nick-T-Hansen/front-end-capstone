
import React, { Component } from "react"
import "./OwnList.css"
export default class GearDetails extends Component {

    //expanded view of a piece of gears details. From here, a user can edit or delete the gear in their private list

    render() {
        const gear = this.props.gearItems.find(
            a => a.id === parseInt(this.props.match.params.gearItemId)) || {};
        // console.log(this.props)
        return (
            <React.Fragment>
            <div key={gear.id} className="details--container">

                <div className="card card-two">
                    <h2 className="details-header" label="Name">
                        {gear.gearName}
                        <hr className="style-two"/>
                    </h2>
                    <p className="details-input" label="Gear Class">
                        Class: <b>{gear.gearClass? gear.gearClass.class:""}</b>
                    </p>
                    <p className="details-input" label="Gear Quality">
                        Quality: <b>{gear.gearQuality? gear.gearQuality.quality:""}</b>
                    </p>
                    <p className="details-input" label="Notes">
                        Notes: <b>{gear.notes}</b>
                    </p>

                <div className="button-container">
                    <button className="btn btn--edit--gear"
                            onClick={() => this.props.history.push(`/${gear.id}/edit`)}
                            >Edit</button>
                    <button className="btn btn--delete--gear"
                            onClick={() => this.props.deleteExistingGear(gear.id)
                                .then(() => this.props.history.push("/owned"))}
                            >Delete</button>
                </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
