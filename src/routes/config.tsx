import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CounterWithToast from './CounterWithToast'
import Home from './Home'

export const routes = () => {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={CounterWithToast} />
         </Switch>
      </Router>
   )
}
