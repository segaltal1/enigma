import { TextField } from '@material-ui/core'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'

export const AppFilter = () => {
    return (
        <section className="app-filter">
            <TextField
                id="outlined-basic"
                label="Seacrh"
                variant="outlined"
                style={{
                    backgroundColor: "navy",
                    color: "white",
                }}
            />
        </section>
    )
}