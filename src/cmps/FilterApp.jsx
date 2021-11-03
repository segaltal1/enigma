import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../store/actions/market.actions'
import { Clear } from '@material-ui/icons'
import { IconButton, TextField } from '@material-ui/core'

export const AppFilter = () => {
    const dispatch = useDispatch()
    const { filterBy } = useSelector(state => state.marketModule)

    const onSetFilter = ({ target }) => {
        dispatch(setFilter(target?.value || ''))
    }

    return (
        <section className="app-filter flex align-center">
            <TextField
                id="field-basic"
                label="Search"
                variant="outlined"
                value={filterBy}
                style={{
                    backgroundColor: "navy",
                    color: "white",
                    borderRadius: 5,

                }}
                onChange={onSetFilter}
            />
            <IconButton
                className="icon-clear"
                onClick={onSetFilter}
                style={{
                    color: '#ffffff',
                    borderRadius: '0px',
                    padding: '8px'
                }}
                aria-label="clear search"
                component="span"
            >
                <Clear />
            </IconButton>
        </section>
    )
}