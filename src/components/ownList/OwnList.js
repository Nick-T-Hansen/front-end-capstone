import React, { Component } from "react"
import OwnCards from "./ownCards"
import "./OwnList.css"

//own list diplays all gearItems which have been created by the logged in user. Cards will be created using .map to loop over the gearItem array.
export default class OwnList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="list-container">
                    <header className="page-header">
                        <h1 className="page-header-text">Welcome back, {sessionStorage.getItem("name")}</h1>
                        <hr className="style-one"></hr>
                    </header>
                    <button className="btn btn-outline-secondary btn-sm"
                        onClick={() => {
                            console.log(this.props)
                            this.props.history.push("/add")
                        }}>
                        Add Gear
                    </button>
                    <div className="card--container">
                        {
                            this.props.gearItems.map(gearItem =>
                                <OwnCards key={gearItem.id} gearItem={gearItem} {...this.props} />
                            )
                        }
                    </div>
                </div>

            </React.Fragment>
        )
    }
}