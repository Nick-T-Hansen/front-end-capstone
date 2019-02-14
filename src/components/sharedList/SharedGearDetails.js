//expanded view of a piece of gears details. From here, a user can edit or delete the gear
import React, { Component } from "react"
export default class SharedGearDetails extends Component {

    //expanded view of a piece of gears details in the shared list.Unlike the gear details, all users can only view details.


    render() {
        const gear = this.props.sharedItems.find(
            a => a.id === parseInt(this.props.match.params.sharedItemId)) || {};
        console.log(this.props.match.params.sharedItemId)
        return (
            <div key={gear.id} className="details--container">
                <div className="details--entry">
                    <h1>Details</h1>
                    <h2 className="details--name" label="Name">
                        {gear.gearName}
                    </h2>
                    <p className="details--class" label="Gear Class">
                        Class: {gear.gearClass? gear.gearClass.class:""}
                    </p>
                    <p className="details--quality" label="Gear Quality">
                        Quality: {gear.gearQuality? gear.gearQuality.quality:""}
                    </p>
                    <p className="details--notes" label="Notes">
                        Notes: {gear.notes}
                    </p>
                </div>
                <div className="details--links--container">
                </div>
            </div>
        )
    }
}
