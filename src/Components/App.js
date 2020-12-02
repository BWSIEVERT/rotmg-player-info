import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PlayerSearch from './PlayerSearch'
import Guide from './Guide'

function App() {

  return (
    <>
    <div>
      <Switch>
        <Route exact path='/' component={PlayerSearch} />
        <Route path='/guide' component={Guide} />
      </Switch>
    </div>
    </>
  )
}

export default App