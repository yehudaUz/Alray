import React from 'react'
import { connect } from 'react-redux';
import { onOffDropList, onNewTab, offNewTab, onOffResult } from '../logic/elementsmManipulation '
import { sendSearchRequest } from './SearchBar'
import SearchResultMiddlePart from './SearchResultMiddlePart'
import { updateCarSearchParams, filterUpdated, updateSortBy } from '../actions/actions';
import { formatDate } from '../other/uti'
import DropDownButton from './DropDownButton'
import { formatPriceWhitCommas } from '../other/uti'


const SearchResult = (props) => {
    const filterPressed = async (filterType, e) => {
        console.log(props)
        if (e.target && e.target.tagName && e.target.tagName !== "BUTTON" &&
            e.target.parentElement && e.target.parentElement.tagName && e.target.parentElement.tagName === "BUTTON")
            e.target = e.target.parentElement
        if (e.target.classList.contains("filter-button-clicked")) {
            e.target.classList.remove("filter-button-clicked")
            filterType === "price" ? props.dispatch(updateCarSearchParams({ withPrice: false })) :
                props.dispatch(updateCarSearchParams({ withPhoto: false }))
        } else {
            e.target.classList.add("filter-button-clicked")
            filterType === "price" ? props.dispatch(updateCarSearchParams({ withPrice: true })) :
                props.dispatch(updateCarSearchParams({ withPhoto: true }))
        }
        props.dispatch(filterUpdated(true))
    }


    if (props.carSearchFiltersUpdated) {
        sendSearchRequest(props, true)
        props.dispatch(filterUpdated(false))
    }

    const FilterRadioLi = (clss, text) => {
        return (
            <li>
                <input type="radio" name="filter-radio"
                    onClick={() => {
                        onOffDropList(".sortBy")
                        document.getElementsByClassName("search-bar-input-radio-text")[0].placeholder = text
                        document.getElementsByClassName("dropDown-button-text")[0].innerText = text
                    }}
                    className={clss} />
                <label className="filter-radio-label">{text}</label>
            </li>
        )
    }



    if (props.searchResult && props.searchResult.length > 0)
        return (
            <div className="search-result-wrapper">
                <div className="search-result-header-wrapper">
                    <h1 className="search-result-header-name" >רכבים פרטיים - מכירה</h1 >
                    <label className="search-result-header-counter" > מציג {props.searchResult.length} מודעות </label>
                </div>
                <div className="feed-options">
                    <div className="filter-search-buttons">
                        <button className="search-result-with-picture" onClick={(e) => filterPressed("picture", e)}>
                            <label>עם תמונה  </label>
                            <i class="fi fi-picture"></i>
                        </button>
                        <button className="search-result-with-price" onClick={(e) => filterPressed("price", e)}>עם מחיר ₪</button>
                        <label className="search-result-display-ads-label">הצג מודעות</label>
                    </div>
                    <div className="sortBy-wrapper">
                        <div className="sort-by-label">
                            <div className="search-bar-input-wrapper">
                                <li className="sortByLi">
                                    {DropDownButton(true, "לפי תאריך", ".sortBy")}
                                    <label className="search-result-sortby-label">מיין לפי</label>
                                    <ul className="searchBarDropDown sortBy hidden" onChange={(e) => {
                                        console.log(e.target)
                                        if (e && e.target && e.target.name && e.target.name === "filter-radio" &&
                                            e.target.checked) {
                                            props.dispatch(updateSortBy(e.target.className))
                                            props.dispatch(filterUpdated(true))
                                        }
                                    }}>
                                        {FilterRadioLi("byDate", "לפי תאריך")}
                                        {FilterRadioLi("byPriceLowToHigh", "מחיר - מהזול ליקר")}
                                        {FilterRadioLi("ByPriceHighToLow", "מחיר - מהיקר לזול")}
                                        {FilterRadioLi("byKmLowToHigh", `ק"מ - מהנמוך לגבוה`)}
                                        {FilterRadioLi("byYearHighToLow", "שנתון - מהגבוה לנמוך")}
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-result-data">
                    {
                        props.searchResult.map(searchData => {
                            return (
                                <>
                                    <div className="search-result-table master"
                                        onClick={(e) => { onOffResult(e); offNewTab(e) }}
                                        onMouseEnter={(e) => onNewTab(e)}
                                        onMouseLeave={(e) => offNewTab(e)}
                                    >
                                        <div className="search-result-left-part">
                                            <div className="search-result-new-tab">
                                                <i className="new-tab hidden"><img className="new-tab-icon" src="/newTabIcon.png" alt="newTabIcon"></img></i>
                                                <span className="hover-text hidden" >פתיחה בטאב חדש</span>
                                            </div>
                                            <div className="search-result-price"><label>{
                                                searchData.price ? ("₪ " + formatPriceWhitCommas(searchData.price)) : "לא צוין מחיר"

                                            }</label></div>
                                            <div className="search-result-date-update"><label>{formatDate(searchData.updatedAt, true)}</label></div>
                                            <button type="button" className="search-result-contact-seller-button hidden" oncClick={(e) => {
                                                console.log(e)
                                            }}>
                                                <span className="search-result-button-text">הצגת מספר טלפון</span>
                                                <i className="fi fi-phone search-result-icon"></i>
                                                <label className="hidden" >{searchData.userId}</label>
                                            </button>
                                            <div className="show-phone-number-wrapper hidden">
                                                <div className="show-phone-number-name">
                                                    <label>ploni almoni</label>
                                                </div>
                                                <div className="show-phone-number-theNumber">
                                                    <label>0544374765</label>
                                                </div>
                                                <div className="show-phone-number-send-email">
                                                    <a href="/sendMailTo">שליחת דוא"ל למפרסם</a>
                                                </div>
                                                <div className="show-phone-number-check-financing">
                                                    <a href="/checkFinanceOffer">בדקו מימון לרכב</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}

                                        <SearchResultMiddlePart searchData={searchData} />

                                        <div className="search-result-right-part">
                                            <div className="search-result-image-wrapper">
                                                {((searchData.imgsLinks && searchData.imgsLinks.length > 0) &&
                                                    < img className="search-result-image" src={searchData.imgsLinks[0]} alt="search-result" />)
                                                    ||
                                                    < img className="search-result-image" src="https://yad2-pics.s3.amazonaws.com/public/empty.jpg" alt="search-result" />
                                                }
                                                {/* <i class="fi fi-heart-alt"></i> */}
                                            </div>
                                            <div className="search-result-car-name-and-title">
                                                <label className="search-result-makerModel">{searchData.model + "  " + searchData.maker}</label>
                                                <label className="search-result-engingTransmition">{
                                                    (searchData.engineType ? searchData.engineType : "") + "  " +
                                                    (searchData.transmitionType ? searchData.transmitionType : "") + "  " +
                                                    (searchData.engineCc ? searchData.engineCc : "")}</label>
                                            </div>
                                            <SearchResultMiddlePart className={"search-result-special-middle-part"} searchData={searchData} />
                                        </div>
                                    </div>

                                    <div className="search-result-table expendable-table hidden">
                                        <div data-v-67abe2bf="" className="search-result-table-expendable-table-size_2_3">
                                            <div className="search-result-sellArea">
                                                <label>אזור המכירה: {searchData.area}</label>
                                            </div>
                                            <div className="search-result-free-text">
                                                <label className="search-result-free-text-header">על הרכב</label>
                                                <label>{searchData.freeText}</label>
                                            </div>
                                            <div className="search-result-other-detils">
                                                <table>
                                                    <tr>
                                                        <label className="search-resultother-detils-header">פרטים נוספים</label>
                                                        <td>
                                                            <div className="search-result-other-detils-right-colunm">
                                                                <div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">טסט עד</label>
                                                                    <label className="search-result-field">{formatDate(searchData.testUntil)}</label>
                                                                </div>
                                                                <div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">בעלות נוכחית</label>
                                                                    {searchData.ownership && <label className="search-result-field">{searchData.ownership}</label>}
                                                                </div><div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">בעלות קודמת</label>
                                                                    {searchData.lastOwnership && <label className="search-result-field">{searchData.lastOwnership}</label>}
                                                                </div><div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">מוכן להחלפה</label>
                                                                    {typeof searchData.isReplaceOk !== 'undefined' && <label className="search-result-field">{searchData.isReplaceOk ? "כן" : "לא"}</label>}
                                                                </div><div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">מותאם לנכים</label>
                                                                    {typeof searchData.isFitToDisability !== 'undefined' && <label className="search-result-field">{searchData.isFitToDisability ? "כן" : "לא"}</label>}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="search-result-other-detils-left-colunm">

                                                                <div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">קילומטראז'</label>
                                                                    {searchData.km && <label className="search-result-field">{searchData.km}</label>}
                                                                </div>
                                                                <div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">סוג מנוע</label>
                                                                    {searchData.engineType && <label className="search-result-field">{searchData.engineType}</label>}
                                                                </div><div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">תיבת הילוכים</label>
                                                                    {searchData.transmitionType && <label className="search-result-field">{searchData.transmitionType}</label>}
                                                                </div><div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">צבע</label>
                                                                    {searchData.color && <label className="search-result-field">{searchData.color}</label>}
                                                                </div><div className="search-result-pair-fields">
                                                                    <label className="search-result-field-descrp">תאריך עלייה לכביש</label>
                                                                    {searchData.dateOnTheRoad && <label className="search-result-field">{formatDate(searchData.dateOnTheRoad)}</label>}
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="search-result-table-expendable-table-size_1_3"></div>


                                    </div>
                                    <div className="search-result-table hidden expendable-table footer">
                                        <div className="footer-text">
                                            <label className="footer-ad-number">{searchData._id} :מספר מודעה</label>
                                            <a href="/foundError" className="footer-mistake-herf">מצאתי טעות</a>
                                        </div>
                                        <div className="footer-social-network-icons">
                                            <a href="/whatsAppLink" /*className=""*/> <i class="fi fi-whatsapp"></i></a>
                                            <a href="/facebookLink" /*className=""*/><i class="fi fi-facebook"></i></a>
                                            <a href="/emailLink" /*className=""*/><i class="fi fi-email"></i></a>
                                            <a href="/linkToAd" /*className=""*/><i class="fi fi-link2"></i></a>
                                            <a href="/printTheAd" /*className=""*/><i class="fi fi-print"></i></a>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div >
        )
    return null
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(SearchResult);


