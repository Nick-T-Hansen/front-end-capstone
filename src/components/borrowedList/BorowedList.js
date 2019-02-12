import React, { Component } from "react"
import BorrowedCard from "./BorrowedCard"

//cards which have been borrowed in the shared list will display here using the borrowed key in the gearItem array.
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
                                <BorrowedCard key={sharedItem.id} sharedItem={sharedItem} {...this.props} />
                            )}
                        </div>
                    </div>
            </div>
            </React.Fragment>
        )
    }
}


