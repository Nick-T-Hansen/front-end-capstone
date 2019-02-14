import React, { Component } from "react"
import SharedCard from "./SharedCard"
import "../ownList/OwnList.css"


//shared list diplays all gearItems which have the boolean set to "true", regardless of userId. Cards will be created using .map to loop over the gearItem array.
export default class OwnList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="list-container">
                <header className="page-header">
                        <h1 className="page-header-text">Community Gear</h1>
                        <hr className="style-one"></hr>
                    </header>
                    <div className="row">
                        <div className=" card--container">
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


