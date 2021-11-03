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