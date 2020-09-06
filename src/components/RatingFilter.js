import React from 'react'
import { connect } from 'react-redux';

const RatingFilter = (props) => {
    return (
        <div className="ratingFilter-wrapper">
            <div className="ratingFilter-header">
                <label>דירוג מלון</label>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(RatingFilter);