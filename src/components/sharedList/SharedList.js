import React, { Component } from "react"
import OwnCards from "../ownList/ownCards"

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
                            {this.props.gearItems.map(gearItem =>
                                <OwnCards key={gearItem.id} gearItem={gearItem} {...this.props} />
                            )
                            }
                        </div>
                        <div className="col">
                        2 of 2
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        1 of 3
                        </div>
                        <div className="col">
                        2 of 3
                        </div>
                        <div className="col">
                        3 of 3
                        </div>
                    </div>
            </div>
            </React.Fragment>
        )
    }
}


