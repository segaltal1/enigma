import { memo, useMemo } from 'react';
import { MarketInfo } from './MarketInfo';

export const MarketList = memo(function _MarketList({ markets, title }) {
    const imgSrcg = useMemo(() => {
        return `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/32/white/${title.toLowerCase()}.png`
    }, [title]);


    return (
        <section className="market-list flex column">
            <div className="title-container flex alig-center gap">
                <img src={imgSrcg} alt="icon" />
                <h2 className="title">{title}</h2>
            </div>
            {markets.length > 0 && markets.map(market => <MarketInfo
                key={market.asset}
                market={market}
            />)}
        </section>
    )
})