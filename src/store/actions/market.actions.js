import { btcService } from '../../services/btc.service';
import { marketService } from '../../services/kraken.service';

export function loadMarkets(market, filterBy = null) {
    return async dispatch => {
        try {
            let markets = (market === 'kraken') ?
                await marketService.getKrakenMarket(filterBy)
                :
                await btcService.getBtcMarket(filterBy)

            dispatch({ type: 'SET_MARKETS', markets })
        } catch (err) {
            console.log('marketActions: err in loadMarkets', err)
        }
    }
}
export function updateWatchList(asset) {
    return async dispatch => {
        try {
            dispatch({ type: 'UPDATE_WATCHLIST', asset })
        } catch (err) {
            console.log('marketActions: err in update', err)
        }
    }
}

export function setFilter(filterBy) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_FILTER', filterBy })
        } catch (err) {
            console.log('Cannot set filter', err)
        }
    }
}