import React from 'react'
import { connect } from 'react-redux';
import { updatePackageSearchResult } from '../actions/actions'
import { filterUpdated } from '../actions/actions'
import { Rating } from '@material-ui/lab';

const sendSearchRequest = async (props, isSearchWithParams) => {
    let urlPath = "http://localhost:3000/packageSearchInitial"
    if (isSearchWithParams)
        urlPath = "http://localhost:3000/packageSearch"
    fetch(urlPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageSearchParams: props.searchParams, sortBy: props.sortBy })
    }).then(response => response.json()).then(data => {
        console.log(data)
        props.dispatch(updatePackageSearchResult(data.body))
        return (data.body)
    }).catch((error) => {
        console.log("ERROR: " + error)
    })
}

const daysBetween2Dates = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    let days1Words = date1.split('/')
    let days2Words = date2.split('/')
    date1 = new Date(days1Words[1] + "/" + days1Words[0] + "/" + days1Words[2])
    date2 = new Date(days2Words[1] + "/" + days2Words[0] + "/" + days2Words[2])
    return Math.round(Math.abs((date1 - date2) / oneDay));
}

const PackageSearchResult = (props) => {
    if (props.filtersUpdated) {
        sendSearchRequest(props, true)
        props.dispatch(filterUpdated(false))
    }

    return (
        <div className="mainApp-result-wrapper">
            <div className="mainApp-result-header">
                <label>סה"כ נמצאו {props.searchResult.lengh} תוצאות</label>
            </div>
            <div className="mainApp-result">
                {props.searchResult.map(searchData => {
                    return (
                        <div key={searchData._id} className="mainApp-result-table">
                            <div className="mainApp-result-table-leftPart">
                                <label>asdfsafdsf</label>
                            </div>
                            <div className="mainApp-result-table-MainPart">
                                <label className="mainApp-result-name">{searchData.name}</label>
                                <Rating defaultValue={searchData.rating} readOnly />
                                <label className="mainApp-result-enterTime">{searchData.dateIn}</label>
                                <label className="mainApp-result-exitTime">{searchData.dateOut}</label>
                                <label className="mainApp-result-conditions">
                                    {daysBetween2Dates(searchData.dateOut, searchData.dateIn) + " "}
                                    לילות
                                    </label>
                                <label className="mainApp-result-conditions">|
                                {searchData.breakfast ? "ארוחת בוקר" : "חדר בלבד"}
                                </label>

                            </div>

                            <div className="mainApp-result-table-rightPart">
                                < img className="mainApp-result-image" src={searchData.imgsLinks[0]} alt="search-result" />
                            </div>
                            {/* onClick={(e) => { onOffResult(e); offNewTab(e) }}
                         onMouseEnter={(e) => onNewTab(e)}
                         onMouseLeave={(e) => offNewTab(e)} */}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(PackageSearchResult);