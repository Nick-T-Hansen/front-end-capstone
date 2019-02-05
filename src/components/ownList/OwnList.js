import React, { Component } from "react"
import OwnCards from "./OwnCards"


export default class OwnList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="OwnList--container">
                <h1>My Gear</h1>
                    {
                        this.props.gearItems.map(gearItem =>
                            <OwnCards key={gearItem.id} gearItem={gearItem} {...this.props} />
                        )
                    }
                </div>
                <button className="btn btn--add--gear"
                        onClick={() => {
                            console.log(this.props)
                            this.props.history.push("/add")
                        }}>
                        Add Gear
                </button>
            </React.Fragment>
        )
    }
}