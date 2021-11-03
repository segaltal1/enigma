import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

export const AppHeader = memo(function _AppHeader() {
    const routes = [
        {
            path: '/', title: 'BTC markets'
        },
        {
            path: '/kraken', title: 'Kraken markets'
        },
        {
            path: '/Watchlist', title: 'Watchlist'
        }
    ]
    return (
        <header className="app-header  main-layout">
            <nav className="btn-navs flex align-center gap">
                {routes.map(({ path, title }) => (
                    <NavLink to={path} key={title}>
                        <Button
                            style={{
                                borderRadius: 5,
                                backgroundColor: "navy",
                                color: "white",
                                padding: "0.6rem",
                            }}
                            variant="contained"
                        >{title}</Button>
                    </NavLink>
                ))}
            </nav>

        </header>
    )
})