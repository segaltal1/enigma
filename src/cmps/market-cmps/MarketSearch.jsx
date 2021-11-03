import { memo } from 'react'
import search from '../../assets/img/search.svg'

export const MarketSearch = memo(function _MarketSearch({ filterBy, handleChange }) {
    return (
        <section className="market-search">
            <div className="search-bar">
                <input
                    onChange={handleChange}
                    value={filterBy}
                    type="text"
                    placeholder="Search Market"
                    autoComplete="off" />
                <img src={search} alt="search" />
            </div>
        </section>
    )
})