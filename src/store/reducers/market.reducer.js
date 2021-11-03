const initialState = {
    markets: [],
    market: null,
}
export function marketReducer(state = initialState, action) {
    var newState = state;
    var markets;
    switch (action.type) {
        case 'FILTER_MARKET':
            newState = { ...state, market: action.market }
            break;
        case 'SET_MARKETS':
            newState = { ...state, markets: action.markets }
            break;
        case 'SET_MARKET':
            markets = state.markets.map(market => market._id !== action.market._id ? market : action.market)
            newState = { ...state, markets, market: action.market }
            break;
        default:
    }
    return newState;
}
