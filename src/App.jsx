import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router'
import { AppHeader } from './cmps/AppHeader';
import { loadMarkets } from './store/actions/market.actions.js';
import routes from './routes.js'

export function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadMarkets('btc'));
  }, [])

  return (
    <section className="app flex column">
      <AppHeader />
      <main className="main-layout">
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
      </main>
    </section>
  )
}

