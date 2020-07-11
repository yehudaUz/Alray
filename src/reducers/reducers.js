import { act } from "react-dom/test-utils";

const initialSearchParams = {
    rating: [true, true, true, true, true],
    fromPrice: 800, toPrice: 6000,
    conditions: { sleep: true, breakfast: true },
    // sortBy: {
    //     price: { highToLow: false, lowToHigh: true },
    //     rating: { highToLow: false, lowToHigh: false },
    //     worthwhile: false
    // }
    sortBy: ""
}

const getLocalStorageOrSetDefault = () => {
    // localStorage.clear()
    // if (localStorage.getItem('state')) {
    // console.log("parse", localStorage.getItem('state'))
    // let tempState = JSON.parse(localStorage.getItem('state'))
    // tempState.carSearchParams = {}//initialCarSearchParams
    // return tempState //JSON.parse(localStorage.getItem('state'))
    // }
    // UpdateInitialSearchResult.default()
    // UpdateInitialSearchResult.default.WrappedComponent()
    const state = {
        currency: "$USD",
        // adsPath: "/yad2Ad.png",
        // menuText: ["ראשי"],
        searchParams: initialSearchParams,
        searchResult: [],
        filtersUpdated: true
        // carSearchFiltersUpdated: false,
        // sortBy: "",
        // searchResult: [],
        // user: { name: "לא ידוע", ads: [] }
    }
    localStorage.setItem('state', JSON.stringify(state));
    return state
}
const initialState = getLocalStorageOrSetDefault()

export default (state = initialState, action) => {
    // console.log("action: " + JSON.stringify(action) + "   state: " + JSON.stringify(state))
    let newState
    switch (action.type) {
        case 'RATING_UPDATE':
            newState = { ...state, searchParams: { ...state.searchParams, rating: action.rating } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'SLIDER_UPDATE':
            newState = { ...state, searchParams: { ...state.searchParams, price: { from: action.sliderValue[0], to: action.sliderValue[1] } } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'UPDATE_CONDITIONS':
            newState = { ...state, searchParams: { ...state.searchParams, conditions: action.newConditions } }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'FILTER_UPDATE':
            newState = { ...state, filtersUpdated: action.isFilterUpdate }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        case 'UPDATE_PACKAGE_RESULT':
            newState = { ...state, searchResult: action.searchResult }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState
        // case 'UPDATE_ADS':
        //     newState = { ...state, adsPath: action.adsPath }
        //     localStorage.setItem('state', JSON.stringify(newState));
        //     return newState
        // case 'UPDATE_MENU':
        //     newState = { ...state, menuText: action.menuText }
        //     localStorage.setItem('state', JSON.stringify(newState));
        //     return newState
        // case 'UPDATE_CAR_SEARCH_PARAMS':
        //     newState = { ...state, carSearchParams: { ...state.carSearchParams, ...action.carSearchParams } }
        //     localStorage.setItem('state', JSON.stringify(newState));
        //     return newState
        // case 'UPDATE_USER':
        //     newState = { ...state, user: action.user }
        //     localStorage.setItem('state', JSON.stringify(newState));
        //     return newState

        // case 'SORT_BY':
        //     newState = { ...state, sortBy: action.sortBy }
        //     localStorage.setItem('state', JSON.stringify(newState));
        //     return newState
        default:
            return state
    }
}
