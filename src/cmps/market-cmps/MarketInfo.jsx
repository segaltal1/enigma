import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { updateWatchList } from "../../store/actions/market.actions";
import starSVg from "../../assets/img/star.svg"

export const MarketInfo = ({ market }) => {
    const { asset, lastPrice, change, volume } = market
    const [isStar, setStar] = useState(false)
    const dispatch = useDispatch()

    const toggleStar = () => {
        setStar((prevState) => !prevState)
        dispatch(updateWatchList(asset))
    }
    
    const changeClass = useMemo(() => {
        return change > 0 ? 'green' : 'red'
    }, [change]);

    return (
        <section className={`market-info flex align-center  ${isStar ? 'marked' : ''}`}>
            <span className="asset">{asset}</span>
            <span className="last-price">{lastPrice}</span>
            <span className={changeClass}>{change + '%'}</span>
            <span className="volume">{volume}</span>
            <span className="flex justify-end">
                <img className={`star-svg ${isStar ? 'marked' : ''}`} onClick={toggleStar} src={starSVg} alt="" />
            </span>
        </section >
    )
}