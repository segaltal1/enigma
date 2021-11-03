import { useState, useEffect } from 'react';
import { actionService } from '../../../services/action.service';
import { CardTitle } from './CardTitle';

export function ActionsMenu({ actionIds }) {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        const fetchActions = async () => {
            const actions = await actionService.getActions(actionIds)
            setActions(actions)
        }
        fetchActions()
    }, [actionIds]);

    return (
        <section className="actions-menu flex column card" >
            <CardTitle title={'Permitted actions'} />
            <div className="card-info flex column">
                {actions.length && actions.map(action =>
                    <p key={action.id} className="card-row">
                        {action.name}
                    </p>)}
            </div>
        </section>
    )
}
