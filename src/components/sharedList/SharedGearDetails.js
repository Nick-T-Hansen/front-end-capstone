//expanded view of a piece of gears details. From here, a user can edit or delete the gear
import React, { Component } from "react"
export default class SharedGearDetails extends Component {

    //expanded view of a piece of gears details in the shared list.Unlike the gear details, all users can only view details.


    render() {
        const gear = this.props.sharedItems.find(
            a => a.id === parseInt(this.props.match.params.sharedItemId)) || {};
        console.log(this.props.match.params.sharedItemId)
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
                </div>
                <div className="details--links--container">
                </div>
            </div>
            </React.Fragment>
        )
    }
}
