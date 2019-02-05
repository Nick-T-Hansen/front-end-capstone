//add new gear to a users OWN list
import React, { Component } from "react"

//need to add quality and class dropdowns to this list. Can I make it auto populate?
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
            userId: 1,
            gearQualityId: this.state.gearItemQuality,
            gearClassId: this.state.gearItemClass,
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
        console.log("gearClasses array", this.props.gearClasses)
        console.log("gearQuality array", this.props.gearQualities)
        console.log("gear array", this.props.gearItems)
        return (
            <React.Fragment>
                <form className="addForm">
                <h1>Add Your Gear</h1>
                    <div className="add--form--group">
                        <label htmlFor="Item">Item</label>
                        <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="gearItemName"
                                placeholder="Item" />
                    </div>
                    <div className="add--form--group">
                        <label htmlFor="class">Class</label>
                        <select value={this.gearItemClass}
                                onChange={this.handleFieldChange} id="gearItemClass">
                            <option value="0">select</option>
                        {this.props.gearClasses.map(gearClass =>
                            <option key={gearClass.id} value={gearClass.id}>{gearClass.class}</option>
                        )}
                        </select>
                    </div>
                    <div className="add--form--group">
                        <label htmlFor="quality">Quality</label>
                        <select value={this.gearItemQuality}
                                onChange={this.handleFieldChange} id="gearItemQuality">
                            <option value="0">select</option>
                            {this.props.gearQualities.map(gearQuality =>
                            <option key={gearQuality.id} value={gearQuality.id}>{gearQuality.quality}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="gearItemNotes" placeholder="Add gear quirks, size, or additional information here" />
                    </div>
                    <button type="submit" onClick={this.constructNewEvent}  className="btn btn-addForm--submit">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}