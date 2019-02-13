import React, { Component } from "react"
import BorrowedCard from "./BorrowedCard"

//cards which have been borrowed in the shared list will display here using the borrowed key in the gearItem array.
export default class OwnList extends Component {

    render = () =>  {

        return (
            <React.Fragment>
                <div className="container borrowedList--container">
                    <div className="row"/>
                        <h1>Borrowed Gear</h1>
                    <div className="row">
                        <div className="col card-container">
                            {this.props.borrowedItems.map(borrowedItem =>
                                <BorrowedCard key={borrowedItem.id} borrowedItem={borrowedItem} {...this.props} />
                            )}
                            {console.log(this.props.borrowedItems)}
                        </div>
                    </div>
            </div>
            </React.Fragment>
        )
    }
}


