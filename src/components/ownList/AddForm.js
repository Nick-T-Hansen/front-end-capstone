//add new gear to a users OWN list
import React, { Component } from "react"


export default class AddForm extends Component {

    state = {
        gearItemName: "",
        gearItemClass: "0",
        gearItemQuality: "0",
        gearItemNotes: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    //create a new object from state which is then posted to JSON and the user is moved backed to the full /owned list
    constructNewEvent = evt => {
        evt.preventDefault()

        if (this.state.gearItemQuality === "0" || this.state.gearItemClass === "0") {
            alert("Please select options from the dropdown menus to continue.")
        } else {

        const createGearItemObject = {
            gearName: this.state.gearItemName,
            userId: Number(sessionStorage.getItem("userId")),
            gearQualityId: Number(this.state.gearItemQuality),
            gearClassId: Number(this.state.gearItemClass),
            notes: this.state.gearItemNotes,
            borrowedUserId: "",
            shared: false
        }

        // Create the event and redirect user to event list
        this.props.postNewGear(createGearItemObject)
            .then(() => this.props.history.push("/owned"))
        }
    }
    render() {
        return (
            <React.Fragment>
                <form className="form-horizontal">
                <h1 className="page-header-text">Add Your Gear</h1>

                    <div className="form-group">
                        <label className="control-lablel">Item</label>
                        <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="gearItemName"
                                placeholder="Item" />
                    </div>
                    <div className="form-group">
                    <label className="control-lablel">Class</label>
                        <select value={this.gearItemClass}
                                onChange={this.handleFieldChange} id="gearItemClass">
                            <option value="0">select</option>
                        {this.props.gearClasses.map(gearClass =>
                            <option key={gearClass.id} value={gearClass.id}>{gearClass.class}</option>
                        )}
                        </select>
                    </div>
                    <div className="form-group">
                    <label className="control-lablel">Quality</label>
                        <select value={this.gearItemQuality}
                                onChange={this.handleFieldChange} id="gearItemQuality">
                            <option value="0">select</option>
                            {this.props.gearQualities.map(gearQuality =>
                            <option key={gearQuality.id} value={gearQuality.id}>{gearQuality.quality}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                    <label className="control-lablel">Notes</label>
                        <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="gearItemNotes" placeholder="Add gear quirks, size, or additional information here" />
                    </div>
                    <button type="submit" onClick={this.constructNewEvent}  className="btn btn-default">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}