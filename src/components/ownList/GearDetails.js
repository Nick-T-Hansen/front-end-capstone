
import React, { Component } from "react"
export default class GearDetails extends Component {

    //expanded view of a piece of gears details. From here, a user can edit or delete the gear in their private list

    render() {
        const gear = this.props.gearItems.find(
            a => a.id === parseInt(this.props.match.params.gearItemId)) || {};
        // console.log(this.props)
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
                    <button className="btn btn--edit--gear"
                            onClick={() => this.props.history.push(`/${gear.id}/edit`)}
                            >Edit</button>
                    <button className="btn btn--delete--gear"
                            onClick={() => this.props.deleteExistingGear(gear.id)
                                .then(() => this.props.history.push("/owned"))}
                            >Delete</button>
                </div>
            </div>
        )
    }
}
