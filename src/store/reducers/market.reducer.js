const initialState = {
    markets: [],
    watchlist: [],
    filterBy: ''
}
export function marketReducer(state = initialState, action) {
    var newState = state;
    var watchlist;
    switch (action.type) {
        case 'SET_FILTER':
            newState = { ...state, filterBy: action.filterBy }
            break;
        case 'SET_MARKETS':
            newState = { ...state, markets: action.markets }
            break;
        case 'UPDATE_WATCHLIST':
            const { asset } = action
            if (state.watchlist.includes(asset))
                console.log("🚀 ~ marketReducer ~ asset", asset)
            // watchlist = state.watchlist.map(market => market._id !== action.market._id ? market : action.market)
            // if(watchlist.includes())
            newState = { ...state, watchlist }
            break;
        default:
    }
    return newState;
}
