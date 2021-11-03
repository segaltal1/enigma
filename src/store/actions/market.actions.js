import { marketService } from './../../services/market.service';

export function loadMarkets(filterBy = null) {
    return async dispatch => {
        try {
            const markets = await marketService.getMarkets(filterBy);
            if (!markets.length) {
                // -----------------NOT WORKING WITH FILTER!---------------
                // const market = await marketService.add()
                // markets.push(market);
            }
            dispatch({ type: 'SET_MARKETS', markets })
        } catch (err) {
            console.log('marketActions: err in loadMarkets', err)
        }
    }
}