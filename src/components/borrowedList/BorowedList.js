import React, { Component } from "react"
import BorrowedCard from "./BorrowedCard"
import "../ownList/OwnList.css"

//cards which have been borrowed in the shared list will display here using the borrowed key in the gearItem array.
export default class OwnList extends Component {

        // componentDidUpdate(prevProps) {
        // // Typical usage (don't forget to compare props):
        // if (this.props.borrowedItems !== prevProps.borrowedItems) {
        //   this.props.updateBookedGear();
    //     }
    //   }

    render = () =>  {
        return (
            <React.Fragment>
                <div className="list-container">
                    <header className="page-header">
                        <h1 className="page-header-text">Borrowed Gear</h1>
                        <hr className="style-one"></hr>
                    </header>
                    <div className="row">
                        <div className="card--container">
                            {this.props.borrowedItems.map(borrowedItem =>
                                <BorrowedCard key={borrowedItem.id} borrowedItem={borrowedItem} {...this.props} />
                            )}
                            {console.log("console log at map", this.props.borrowedItems)}
                        </div>
                    </div>
            </div>
            </React.Fragment>
        )
    }
}


