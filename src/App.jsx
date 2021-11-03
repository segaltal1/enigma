import { Switch, Route } from 'react-router'
import routes from './routes.js'

import { AppHeader } from './cmps/AppHeader';
import { useDispatch } from 'react-redux';
import { loadMarkets } from './store/actions/market.actions.js';
import { useEffect } from 'react';

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

