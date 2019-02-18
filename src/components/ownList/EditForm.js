import React, { Component } from "react"
import GearManager from "../../modules/GearManager"

export default class EditForm extends Component {

    //set initial state
    state = {
        editGearName: "",
        editGearQualityId: "0",
        editGearClassId: "0",
        editNotes: "",
        shared: ""
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    //object to be edited from state
    updateExistingGear = evt => {
        evt.preventDefault()

        if (this.state.editGearQualityId === "0" || this.state.editGearClassId === "0") {
            alert("Please select options from the dropdown menus to continue.")

        } else {
            const editGearItemObject = {
                gearName: this.state.editGearName,
                userId: Number(sessionStorage.getItem("userId")),
                gearQualityId: Number(this.state.editGearQualityId),
                gearClassId: Number(this.state.editGearClassId),
                notes: this.state.editNotes,
                borrowedUserId: "",
                shared: this.state.shared
            }

            this.props.updateGear(this.props.match.params.gearItemId, editGearItemObject)
            .then(() => this.props.history.push("/owned"))
        }
    }

    //component which calls my fetch module
    componentDidMount() {
        GearManager.getGearItem(this.props.match.params.gearItemId)
        .then(gear => {
            this.setState({
                editGearName: gear.gearName,
                editGearQualityId: gear.gearQualityId,
                editGearClassId: gear.gearClassId,
                editNotes: gear.notes,
                shared: gear.shared
            });
        });
        }
    render() {
        return (
            <React.Fragment>
                <form className="editForm">
                <h1 className="page-header-text">Edit Your Gear</h1>
                    <div className="edit--form--group">
                        <label htmlFor="Item">Item</label>
                        <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editGearName"
                                value = {this.state.editGearName} />
                    </div>
                    <div className="edit--form--group">
                        <label htmlFor="class">Class</label>
                        <select value={this.state.editGearClassId}
                                onChange={this.handleFieldChange} id="editGearClassId">
                        {this.props.gearClasses.map(gearClass =>
                            <option key={gearClass.id} value={gearClass.id}>{gearClass.class}</option>
                        )}
                        </select>
                    </div>
                    <div className="edit--form--group">
                        <label htmlFor="quality">Quality</label>
                        <select value={this.state.editGearQualityId}
                                onChange={this.handleFieldChange} id="editGearQualityId">
                        {this.props.gearQualities.map(gearQuality =>
                            <option key={gearQuality.id} value={gearQuality.id}>{gearQuality.quality}</option>
                        )}
                        </select>
                    </div>
                    <div className="edit--form--group">
                        <label htmlFor="notes">Notes</label>
                        <input type="text" required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="editNotes"
                                value= {this.state.editNotes} />
                    </div>
                    <button type="submit" onClick={this.updateExistingGear}  className="btn btn-addForm--update">Update</button>
                </form>
            </React.Fragment>
        )
    }
}