import { memo } from 'react';
import { MarketPreview } from './MarketPreview';

export const MarketList = memo(function _MarketList({ markets, selectedMarket, onSelectMarket }) {
    return (
        <section className="market-list flex column">
            {markets.length ? markets.map(market => <MarketPreview
                key={market.id}
                market={market}
                selectedMarket={selectedMarket}
                onSelectMarket={onSelectMarket} />)
                : <h1>No markets found!</h1>}
        </section>
    )
})