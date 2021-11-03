import { memo } from 'react';
import { MarketInfo } from './MarketInfo';

export const MarketList = memo(function _MarketList({ markets, title }) {
    return (
        <section className="market-list flex column gap">
            <h2 className="title">{title}</h2>
            {markets.length && markets.map(market => <MarketInfo
                key={market.asset}
                market={market}
            />)}
        </section>
    )
})