import { Switch, Route } from 'react-router'
import routes from './routes.js'

import { AppHeader } from './cmps/AppHeader';

export function App() {

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

