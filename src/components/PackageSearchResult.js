import React from 'react'
import { connect } from 'react-redux';
import { updatePackageSearchResult } from '../actions/actions'
import { filterUpdated } from '../actions/actions'

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

const PackageSearchResult = (props) => {
    if (props.filtersUpdated) {
        sendSearchRequest(props, true)
        props.dispatch(filterUpdated(false))
    }

    return (
        <div className="mainApp-result-wrapper">
            <div className="mainApp-result-header">
                <label>סה"כ נמצאו {"7"} תוצאות</label>
            </div>
            <div className="mainApp-result">
                {props.searchResult.map(searchData => {
                    return (
                        <div className="mainApp-result-table">
                            <div className="mainApp-result-table-rightPart">
                                < img className="mainApp-result-image" src={searchData.imgsLinks[0]} alt="search-result" />)
                            </div>
                            <div className="mainApp-reuslt-table-MainPart">
                                <label>{JSON.stringify(searchData)}</label>
                            </div>
                            <div className="mainApp-result-table-leftPart">
                                    <label>asdfsafdsf</label>
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