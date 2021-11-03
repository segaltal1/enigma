import arrow from '../../assets/img/arrow-right.svg'
import active from '../../assets/img/active.svg'

export function MarketPreview({ market, selectedMarket, onSelectMarket }) {
    const isActive = market.id === selectedMarket?.id;
    return (
        <section className={`market-preview flex align-center space-between ${isActive ? 'active' : ''}`}
            onClick={() => onSelectMarket(market)}>
            <div className="market-title align-center flex">
                <img src={active} alt="active" />
                <span>{market.name}</span>
            </div>
            <img src={arrow} alt="arrow" />
        </section>
    )
}