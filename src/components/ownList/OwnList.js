import React, { Component } from "react"
import OwnCards from "./OwnCards"


export default class OwnList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="OwnList--container">
                    {
                        this.props.gearItems.map(gearItem =>
                            <OwnCards key={gearItem.id} gearItem={gearItem} {...this.props} />
                        )
                    }
                <h1>Test</h1>
                </div>
                <button className="btn btn--add--gear">Add Gear</button>
            </React.Fragment>
        )
    }
}