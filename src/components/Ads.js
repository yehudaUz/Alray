import React from 'react'
import { connect } from 'react-redux';

const Ads = (props) => {
    return (
        <div className="ads">
            <img src={props.adsPath} alt="yad2Ads" className="yad2Ads"></img>
        </div>
    )
}

// export { Ads as default }

const mapStateToProps = (state) => {
    return state
    // return {
    //     expenses: selectExpenses(state.expenses, state.filters)
    // };
};

export default connect(mapStateToProps)(Ads);
