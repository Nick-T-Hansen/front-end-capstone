import React, { Component } from "react"
import SharedCard from "./SharedCard"

//shared list diplays all gearItems which have the boolean set to "true", regardless of userId. Cards will be created using .map to loop over the gearItem array.
export default class OwnList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container sharedList--container">
                    <div className="row"/>
                        <h1>Shared Gear</h1>
                    <div className="row">
                        <div className="col card-container">
                            {this.props.sharedItems.map(sharedItem =>
                                <SharedCard key={sharedItem.id} sharedItem={sharedItem} {...this.props} />
                            )}
                        </div>
                    </div>
            </div>
            </React.Fragment>
        )
    }
}


