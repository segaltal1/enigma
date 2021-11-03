import { useEffect, useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppFilter } from "./FilterApp"
import { MarketList } from "./market-cmps/MarketList"
import { loadMarkets } from "../store/actions/market.actions"

export const AppBoard = ({ match }) => {
    const { markets, filterBy } = useSelector(state => state.marketModule)
    const dispatch = useDispatch()


    const marketsToDisaply = useMemo(() => {
        if (!filterBy) return markets
        const regex = new RegExp(filterBy, 'i');
        return Object.keys(markets).reduce((acc, title) => {
            acc[title] = markets[title].filter(market => regex.test(market.asset))
            return acc;
        }, {})

    }, [filterBy, markets])

    useEffect(() => {
        const { params } = match
        if (params.kraken) dispatch(loadMarkets(params.kraken))
        else if (match.path === '/') dispatch(loadMarkets('btc'))
    }, [match])

    return (
        <section className="app-board flex column gap">
            <AppFilter />
            {Object.keys(marketsToDisaply).map(title => (
                <MarketList key={title} markets={marketsToDisaply[title]} title={title} />
            ))}
        </section>
    )
}