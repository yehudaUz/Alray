// import { makersAndModels, areas } from '../other/textData'

// const initialCarSearchParams = {
//     maker: [], model: [], fromYear: "", toYear: "", fromPrice: "", toPrice: "", area: [],
//     fromKm: "", toKm: "", fromHand: "", toHand: "", color: "", ownership: "", engineCcFrom: "",
//     engineCcTo: "", engineType: "", transmitionType: "", freeText: "", withPrice: false, withPhoto: false
// }


const getLocalStorageOrSetDefault = () => {
    // localStorage.clear()
    if (localStorage.getItem('state')) {
        // console.log("parse", localStorage.getItem('state'))
        let tempState = JSON.parse(localStorage.getItem('state'))
        // tempState.carSearchParams = {}//initialCarSearchParams
        return tempState //JSON.parse(localStorage.getItem('state'))
    }
    // UpdateInitialSearchResult.default()
    // UpdateInitialSearchResult.default.WrappedComponent()
    const state = {
        currency: "$USD"
        // adsPath: "/yad2Ad.png",
        // menuText: ["ראשי"],
        // carSearchParams: initialCarSearchParams,
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
        // case 'UPDATE_CAR_SEARCH_RESULT':
        //     newState = { ...state, searchResult: action.searchResult }
        //     localStorage.setItem('state', JSON.stringify(newState));
        //     return newState
        // case 'UPDATE_USER':
        //     newState = { ...state, user: action.user }
        //     localStorage.setItem('state', JSON.stringify(newState));
        //     return newState
        // case 'FILTER_UPDATE':
        //     newState = { ...state, carSearchFiltersUpdated: action.isFilterUpdate }
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
