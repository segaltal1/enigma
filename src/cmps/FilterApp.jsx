import { Button, IconButton, TextField } from '@material-ui/core'
import { RemoveCircleOutline } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { setFilter } from '../store/actions/market.actions'

export const AppFilter = () => {
    const dispatch = useDispatch()

    const onSetFilter = ({ target }) => {
        dispatch(setFilter(target.value))
    }

    return (
        <section className="app-filter flex align-center">
            <TextField
                id="field-basic"
                label="Seacrh"
                variant="outlined"
                style={{
                    backgroundColor: "navy",
                    color: "white",
                    borderRadius: 5,

                }}
                onChange={onSetFilter}
            />
            <IconButton aria-label="delete">
                <RemoveCircleOutline />
            </IconButton>

        </section>
    )
}