import React from 'react'
import { connect } from 'react-redux';
import RatingFilter from './RatingFilter'

const MainApp = (props) => {
    return (
        <div className="mainApp-wrapper">
            <div className="mainApp-centerize-wrapper">
                <div className="mainApp-filter-wrapper">
                    <div className="mainApp-filter-header">
                        <label>סינון תוצאות</label>
                    </div>
                    <RatingFilter />
                </div>
                <div className="mainApp-sortAndResult">
                    <div className="mainApp-sort">

                    </div>
                    <div className="mainApp-result">

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(MainApp);