import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { loadMarkets } from "../store/actions/market.actions"
import { AppFilter } from "./FilterApp"
import { MarketList } from "./market-cmps/MarketList"

export const AppBoard = ({ match }) => {
    const { markets } = useSelector(state => state.marketModule)
    const dispatch = useDispatch()

    useEffect(() => {
        const { params } = match
        if (params.kraken) dispatch(loadMarkets(params.kraken))
        else if (match.path === '/') dispatch(loadMarkets('btc'))
    }, [match])
    return (
        <section className="app-board flex column gap">
            <AppFilter />
            {Object.keys(markets).map(title => (
                <MarketList key={title} markets={markets[title]} title={title} />
            ))}
        </section>
    )
}