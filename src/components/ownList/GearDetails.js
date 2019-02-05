//expanded view of a piece of gears details. From here, a user can edit or delete the gear
import React, { Component } from "react"

//gear class id and quality need to be expanded to display the value and not the id number
export default class GearDetails extends Component {
    render() {
        const gear = this.props.gearItems.find(
            a => a.id === parseInt(this.props.match.params.gearItemId)) || {};

        return (
            <div key={this.props.gearItems.id} className="details--container">
                <div className="details--entry">
                    <h1>Details</h1>
                    <h2 className="details--name" label="Name">
                        {gear.gearName}
                    </h2>
                    <p className="details--class" label="Gear Class">
                        {gear.gearClassId}
                    </p>
                    <p className="details--quality" label="Gear Quality">
                        {gear.gearQualityId}
                    </p>
                    <p className="details--notes" label="Notes">
                        {gear.notes}
                    </p>

                    {/* onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</a> */}
                    <button className="btn btn--edit--gear">Edit</button>
                    <button className="btn btn--delete--gear">Delete</button>
                </div>
            </div>
        )
    }
}
