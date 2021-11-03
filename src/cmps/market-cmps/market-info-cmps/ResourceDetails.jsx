import { DetailsInfo } from './DetailsInfo'
import { CardTitle } from './CardTitle'

export function MarketDetails({ details }) {
    return (
        <section className="market-details flex column card" >
            <CardTitle title={'General Details'} />

            <div className="card-info flex column">
                {Object.keys(details).map((key, idx) =>
                    <DetailsInfo key={idx} label={key} info={details[key]} />
                )}
            </div>

        </section>
    )
}
