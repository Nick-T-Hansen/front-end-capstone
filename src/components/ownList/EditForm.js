import React, { Component } from "react"
import GearManager from "../../modules/GearManager"

export default class EditForm extends Component {

    //set initial state
    state = {
        editGearName: "",
        editGearQualityId: "0",
        editGearClassId: "0",
        editNotes: ""
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
                userId: this.props.match.params.userId,
                gearQualityId: this.state.editGearQualityId,
                gearClassId: this.state.editGearClassId,
                notes: this.state.editNotes,
                borrowedUserId: "",
                shared: false
            }

            this.props.updateGear(this.props.match.params.gearItemId, editGearItemObject)
            .then(() => this.props.history.push("/owned"))
        }
    }

    //component which calls my fetch module
    componentDidMount() {
        GearManager.getGearItem(this.props.match.params.gearItemId)
        .then(gear => { console.log(gear)
            this.setState({
                editGearName: gear.gearName,
                editGearQualityId: gear.gearQualityId,
                editGearClassId: gear.gearClassId,
                editNotes: gear.notes
            });
        });
        }
    render() {


        return (
            <React.Fragment>
                <form className="editForm">
                <h1>Edit Your Gear</h1>
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
                        <select value={this.editGearClassId}
                                onChange={this.handleFieldChange} id="editGearClassId">
                        {this.props.gearClasses.map(gearClass =>
                            this.editGearClassId === gearClass.id?
                                <option key={gearClass.id} value={gearClass.id}>{gearClass.class}</option>
                                :
                                <option key={gearClass.id} value={gearClass.id}>{gearClass.class}</option>
                        )}
                        </select>
                    </div>
                    <div className="edit--form--group">
                        <label htmlFor="quality">Quality</label>
                        <select value={this.editGearQualityId}
                                onChange={this.handleFieldChange} id="editGearQualityId">
                        {this.props.gearQualities.map(gearQuality =>
                            this.editGearQualityId === gearQuality.id?
                                <option key={gearQuality.id} value={gearQuality.id}>{gearQuality.quality}</option>
                                :
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