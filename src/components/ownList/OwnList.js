import React, { Component } from "react"
import OwnCards from "./ownCards"
import "./OwnList.css"

//own list diplays all gearItems which have been created by the logged in user. Cards will be created using .map to loop over the gearItem array.
export default class OwnList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="OwnList--container">
                    <header className="page-header">
                        <h1>My Gear</h1>
                    </header>
                    <div className="card--container">
                        {
                            this.props.gearItems.map(gearItem =>
                                <OwnCards key={gearItem.id} gearItem={gearItem} {...this.props} />
                            )
                        }
                    </div>
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