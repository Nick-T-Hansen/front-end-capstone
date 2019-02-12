import React, { Component } from "react"
import SharedCard from "./SharedCard"

export default class OwnList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container sharedList--container">
                    <div className="row"/>
                        <h1>Shared Gear</h1>
                    <div className="row">
                        1 of 2
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


