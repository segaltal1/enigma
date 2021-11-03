import { useMemo, useState } from "react";


export const MarketInfo = ({ market }) => {
    const { asset, lastPrice, change, volume } = market
    const [isStar, setStar] = useState(false)

    const toggleStar = () => {
        setStar((prevState) => !prevState)
    }
    const changeClass = useMemo(() => {
        return change > 0 ? 'green' : 'red'
    }, [change]);

    return (
        <section className={`market-info flex align-center  ${isStar ? 'marked' : ''}`}>
            <span className="asset">{asset}</span>
            <span>{lastPrice}</span>
            <span className={changeClass}>{change + '%'}</span>
            <span className="volume">{volume}</span>
            {isStar ?
                < span onClick={toggleStar} className="star">⭐</span>
                : <span onClick={toggleStar} className="star">☆</span>
            }

        </section >
    )
}