import { memo } from 'react';
import help from '../../../assets/img/help-12.svg'

export const CardTitle = memo(function _CardTitle({ title }) {
    return (
        <section className="card-title flex align-center">
            <span>
                {title}
            </span>
            <img src={help} alt="help" />
        </section>
    )
})
