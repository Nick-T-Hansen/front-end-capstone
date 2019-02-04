//expanded view of a piece of gears details. From here, a user can edit or delete the gear
import React, { Component } from "react"
import { Link } from "react-router-dom";

//gear details are not displaying in dom, but I am able to console log the object as well as get the correct url based on the card id. I am creating a get fetch whciih will take the id and populate the url
export default class GearDetails extends Component {
    render() {
        console.log(this.props)
        // this.props.gearManager.getGearItem(this.props.gearItems.id)

        return (
            <div key={this.props.gearItems.id} className="details--container">
                <div className="details--entry">
                    <h1>Details</h1>
                    <h2 className="details--name" label="Name">
                        {this.props.gearItems.gearName}
                    </h2>
                    <p className="details--class" label="Gear Class">
                        {this.props.gearItems.gearClassId}
                    </p>
                    <p className="details--quality" label="Gear Quality">
                        {this.props.gearItems.gearQualityId}
                    </p>
                    <p className="details--quality" label="Notes">
                        {this.props.gearItems.notes}
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
