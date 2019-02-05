//add new gear to a users OWN list
import React, { Component } from "react"
import { Link } from "react-router-dom";

//need to add quality and class dropdowns to this list. Can I make it auto populate?
export default class AddForm extends Component {

    state = {
        gearItemName: " ",
        gearItemClass: " ",
        gearItemQuality: " ",
        gearItemNotes: "",
    }

        // Update state whenever an input field is edited
        handleFieldChange = evt => {
            const stateToChange = {}
            stateToChange[evt.target.id] = evt.target.value
            this.setState(stateToChange)
        }

    constructNewEvent = evt => {
        evt.preventDefault()
        console.log("click")

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
        this.props.postNewGear(createGearItemObject).then(() => this.props.history.push("/owned"))
    }
    render() {
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
                        <select value={this.props.gearItemClass} onChange={this.handleFieldChange} id="gearItemClass">
                            <option value="tent">tent</option>
                        </select>
                    </div>
                    <div className="add--form--group">
                        <label htmlFor="quality">Quality</label>
                        <select value={this.props.gearItemClass} onChange={this.handleFieldChange} id="gearItemQuality">
                            <option value="like new">Like New</option>
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